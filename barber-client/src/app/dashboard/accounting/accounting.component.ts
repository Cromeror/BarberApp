import {Component, ViewChild} from '@angular/core';
import {MovementParams, MovementsService, PaginateMovement} from '../../api/movements.service';
import moment from 'moment';
import {isNotNullOrUndefined} from 'codelyzer/util/isNotNullOrUndefined';
import {NzPaginationComponent} from 'ng-zorro-antd';

@Component({
  selector: 'app-accounting',
  templateUrl: './accounting.component.html',
  styleUrls: ['./accounting.component.scss']
})
export class AccountingComponent {
  @ViewChild(NzPaginationComponent) pagination: NzPaginationComponent;

  dataSource: PaginateMovement;
  filters: MovementParams = {$limit: 10};
  showFilterByDate: boolean;

  constructor(private movementService: MovementsService) {
    this.fetchData();
  }

  fetchData(params?: MovementParams): void {
    if (isNotNullOrUndefined(params)) {
      this.filters = params;
    }
    this.movementService.all(params).subscribe((data: PaginateMovement) => {
      this.dataSource = data;
    });
  }

  changePage(page: number) {
    if (page === 1) {
      this.fetchData();
      return;
    }
    this.fetchData({...this.filters, $skip: (page - 1) * (this.filters?.$limit || 10)});
  }

  changePageSize(limit: number) {
    this.fetchData({...this.filters, $limit: limit});
  }

  onChangeFilterByDate(event: any[]) {
    if (!isNotNullOrUndefined(event)) {
      delete this.filters['createdAt[$gte]'];
    }

    const from = moment((event[0] || undefined)).set({hour: '00', minute: '00', second: '00', millisecond: '00'});
    const to = moment((event[1] || undefined)).set({hour: '11', minute: '59', second: '59', millisecond: '00'});

    this.filters = {...this.filters, 'createdAt[$gte]': from.toISOString(), 'createdAt[$lte]': to.toISOString()};
  }

  resetFilterByDate() {
    delete this.filters['createdAt[$lt]'];
    delete this.filters['createdAt[$gt]'];
    delete this.filters['createdAt[$gte]'];
    delete this.filters['createdAt[$lte]'];
    this.filters.$skip = 0;
    this.showFilterByDate = false;
    this.pagination.nzPageIndex = 1;
    this.fetchData(this.filters);
  }

  okFilterByDate(): void {
    this.fetchData(this.filters);
    this.showFilterByDate = false;
  }
}
