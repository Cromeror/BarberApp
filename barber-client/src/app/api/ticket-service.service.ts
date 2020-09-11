import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketServiceService {
  constructor(private http: HttpClient) {
  }

  create(ticketServices: TicketServices): Observable<TicketServices> {
    return this.http.post<TicketServices>('api/ticket-services', ticketServices);
  }
}

export interface TicketServices {
  serviceId: number;
  ticketId: number;
}
