import {Component, Input} from '@angular/core';
import {GenericDialog} from '../utils/generic-dialog';
import {TicketServicesResponse} from '../api/ticket-service.service';
import {isNotNullOrUndefined} from 'codelyzer/util/isNotNullOrUndefined';
import {User} from '../api/user.service';

@Component({
  selector: 'app-dialog-ending-service',
  templateUrl: './dialog-ending-service.component.html',
  styleUrls: ['./dialog-ending-service.component.scss']
})
export class DialogEndingServiceComponent extends GenericDialog {
  @Input() services: Array<TicketServicesResponse>;
  @Input() client: User;
  @Input() visits: number;

  constructor() {
    super();
  }

  freeHaircut(): void {
    this.okEvent.emit(0);
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
