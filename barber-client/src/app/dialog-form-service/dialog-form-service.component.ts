import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Service, ServicesService} from '../api/services.service';
import {isNotNullOrUndefined} from 'codelyzer/util/isNotNullOrUndefined';

@Component({
  selector: 'app-dialog-form-service',
  templateUrl: './dialog-form-service.component.html',
  styleUrls: ['./dialog-form-service.component.scss']
})
export class DialogFormServiceComponent {
  @Input() isVisible = false;
  @Input() title = '';
  @Input() values: Service;
  @Output() closedEvent = new EventEmitter<boolean>();
  isValid: boolean;

  constructor(public servicesService: ServicesService) {
  }

  handleOk(): void {
    if (isNotNullOrUndefined(this.values)) {
      this.servicesService.update(this.servicesService.form.value, this.values.id)
        .subscribe(() => {
          this.close();
        });
    } else {
      this.servicesService.create(this.servicesService.form.value)
        .subscribe(() => {
          this.close();
        });
    }
  }

  close(): void {
    this.isVisible = false;
    this.servicesService.form.reset();
    this.closedEvent.emit(this.isVisible);
  }
}
