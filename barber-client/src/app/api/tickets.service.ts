import {Injectable} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Pagination} from './utils/pagination';
import {User} from './user.service';
import {TicketServicesResponse} from './ticket-service.service';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {
  form: FormGroup;

  constructor(private http: HttpClient,
              private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      id: [null],
      position: [null, Validators.required],
      finish_date: [null],
      start_date: [null],
      userId: [null, Validators.required]
    });
  }

  create(tickets: Ticket): Observable<Ticket> {
    return this.http.post<Ticket>('api/tickets', tickets);
  }

  update(ticket: PartialTicket, id: number): Observable<Ticket> {
    return this.http.patch<Ticket>('api/tickets/' + id, ticket);
  }

  all(params?: TicketParam): Observable<PaginateTicket> {
    return this.http.get<PaginateTicket>('api/tickets', {params: {...params}});
  }
}

export interface TicketParam {
  active?: any;
}

export interface PartialTicket {
  position?: number;
  active?: boolean;
  // tslint:disable-next-line:variable-name
  finish_date?: string;
  // tslint:disable-next-line:variable-name
  start_date?: string;
  status?: Status | string;
}

export interface Ticket {
  id?: number;
  position?: number;
  userId: number;
  active: boolean;
  // tslint:disable-next-line:variable-name
  finish_date?: string;
  // tslint:disable-next-line:variable-name
  start_date?: string;
  status?: Status | string;
  ticket_services?: Array<{
    serviceId: number;
  }>;
}

export interface TicketResponse {
  id?: number;
  position?: number;
  userId: number;
  active: boolean;
  status?: Status | string;
  // tslint:disable-next-line:variable-name
  finish_date?: string;
  // tslint:disable-next-line:variable-name
  start_date?: string;
  user: User;
  ticket_services?: Array<TicketServicesResponse>;
}

export class PaginateTicket implements Pagination {
  limit: number;
  skip: number;
  total: number;
  data: TicketResponse[];
}

export enum Status {
  IN_QUEUE = 'in_queue',
  IN_SERVICE = 'in_service',
  SERVED = 'served',
  CANCELED = 'canceled'
}
