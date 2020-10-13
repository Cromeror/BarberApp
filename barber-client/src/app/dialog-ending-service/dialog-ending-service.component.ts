import {Component, Input, OnInit} from '@angular/core';
import {GenericDialog} from '../utils/generic-dialog';
import {TicketServicesResponse} from '../api/ticket-service.service';
import {isNotNullOrUndefined} from 'codelyzer/util/isNotNullOrUndefined';

@Component({
  selector: 'app-dialog-ending-service',
  templateUrl: './dialog-ending-service.component.html',
  styleUrls: ['./dialog-ending-service.component.scss']
})
export class DialogEndingServiceComponent extends GenericDialog implements OnInit {
  @Input() services: Array<TicketServicesResponse>;

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

  handleOk(): void {
    this.okEvent.emit(this.calcTotalPayment());
  }

  close(): void {
    // this.isVisible = false;
    // this.servicesService.form.reset();
    this.closedEvent.emit(this.isVisible);
  }

  calcTotalPayment(): number {
    let totalPayment = 0;
    if (isNotNullOrUndefined(this.services)) {
      this.services.forEach((ticketService: TicketServicesResponse) => {
        totalPayment += ticketService.service.price;
      });
    }
    return totalPayment;
  }
}
