import {Injectable} from '@angular/core';

import * as feathersRx from 'feathers-reactive';
import * as io from 'socket.io-client';
import feathers from '@feathersjs/feathers';
import feathersSocketIOClient from '@feathersjs/socketio-client';
import {Observable, ReplaySubject} from 'rxjs';
import {PaginateTicket, Ticket, TicketResponse} from './tickets.service';
import {take, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RealtimeApiService {
  private feathersInstance: any = feathers();
  private socketInstance = io('http://localhost:3031');
  private feathersAuthClient = require('@feathersjs/authentication-client').default;
  private ticketsSubject: ReplaySubject<PaginateTicket>;
  private credentials = {
    strategy: 'local',
    email: 'cristobal@gmail.com',
    password: '123456'
  };

  constructor() {
    this.feathersInstance
      .configure(feathersSocketIOClient(this.socketInstance))  // add socket.io plugin
      .configure(this.feathersAuthClient({                   // add authentication plugin
        storage: window.localStorage
      }))
      .configure(feathersRx({                           // add feathers-reactive plugin
        idField: '_id'
      }));

    this.ticketsSubject = new ReplaySubject<PaginateTicket>(1);
    this.initConnection();
  }

  public get tickets$(): Observable<PaginateTicket> {
    return this.ticketsSubject.asObservable();
  }

  initTicketsConnection(limit = 10): Observable<PaginateTicket> {
    return this.findAllActive(limit)
      .pipe(take(1),
        tap(() => {
          this.registerUpdate();
        }),
        tap(() => {
          this.registerCreated();
        }));
  }

  findAllActive(limit = 10): Observable<PaginateTicket> {
    return this.feathersInstance.service('tickets')
      .watch()
      .find({
        query: {
          active: true,
          $sort: {position: 1},
          $limit: limit
        }
      })
      .pipe(take(1));
  }

  private initConnection(): void {
    this.feathersInstance.authenticate(this.credentials)
      .then(() => {
        this.initTicketsConnection(10)
          .subscribe((tickets: PaginateTicket) => {
            this.ticketsSubject.next(tickets);
          });
      })
      .catch(err => {
        console.log('Wrong credentials!');
      });
  }

  private registerUpdate(): void {
    this.feathersInstance.service('tickets')
      .on('patched', (data: Ticket) => {
        this.tickets$
          .pipe(take(1))
          .subscribe((tickets: PaginateTicket) => {
            const updatedTicketData = tickets.data.map((ticket: TicketResponse) => {
              if (ticket.id === data.id) {
                return Object.assign(ticket, data);
              }
              return ticket;
            });
            this.ticketsSubject.next({...tickets, data: updatedTicketData.filter((ticket: any) => ticket.active)});
          });
      });
  }

  private registerCreated(): void {
    this.feathersInstance.service('tickets')
      .on('created', (data) => {
        this.findAllActive()
          .subscribe((tickets: PaginateTicket) => {
            this.ticketsSubject.next(tickets);
          });
      });
  }

  // expose logout
  public logout() {
    return this.feathersInstance.logout();
  }
}
