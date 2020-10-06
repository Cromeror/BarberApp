import {Injectable} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Pagination} from './utils/pagination';
import {User} from './user.service';

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
  ticket_services?: Array<{
    serviceId: number;
  }>;
}

export interface TicketResponse {
  id?: number;
  position?: number;
  userId: number;
  active: boolean;
  // tslint:disable-next-line:variable-name
  finish_date?: string;
  // tslint:disable-next-line:variable-name
  start_date?: string;
  user: User;
  ticket_services?: Array<{
    id: number;
    service: {
      id: number;
      name: string;
      price: number;
      gender: string;
      grown_state: string;
    };
  }>;
}

export class PaginateTicket implements Pagination {
  limit: number;
  skip: number;
  total: number;
  data: TicketResponse[];
}
