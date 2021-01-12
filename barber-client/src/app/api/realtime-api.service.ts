import {Injectable} from '@angular/core';

import * as feathersRx from 'feathers-reactive';
import * as io from 'socket.io-client';
import feathers from '@feathersjs/feathers';
import feathersSocketIOClient from '@feathersjs/socketio-client';
import {Observable, ReplaySubject} from 'rxjs';
import {PaginateTicket, Ticket, TicketResponse} from './tickets.service';
import {take, tap} from 'rxjs/operators';
import {PaginatePlaylist} from './playlist.service';

@Injectable({
  providedIn: 'root'
})
export class RealtimeApiService {
  private feathersInstance: any = feathers();
  private socketInstance = io('http://localhost:3031');
  private feathersAuthClient = require('@feathersjs/authentication-client').default;
  private ticketsSubject: ReplaySubject<PaginateTicket>;
  private playlistSubject: ReplaySubject<PaginatePlaylist>;
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
    this.playlistSubject = new ReplaySubject<PaginatePlaylist>(1);
    this.initConnection();
  }

  public get tickets$(): Observable<PaginateTicket> {
    return this.ticketsSubject.asObservable();
  }

  public get playlist$(): Observable<PaginatePlaylist> {
    return this.playlistSubject.asObservable();
  }

  initTicketsConnection(limit = 10): Observable<PaginateTicket> {
    return this.findAllActive(limit)
      .pipe(take(1),
        tap(() => {
          this.registerTicketUpdate();
        }),
        tap(() => {
          this.registerTicketCreated();
        }));
  }

  initPlaylistConnection(limit = 10): Observable<PaginatePlaylist> {
    return this.getPlaylist(limit).pipe(
      tap(() => {
        this.registerToPlaylistCreated();
      })
    );
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

  /**
   * Inicia toda las conexiones después de iniciar sesión con las credenciales.
   */
  private initConnection(): void {
    this.feathersInstance.authenticate(this.credentials)
      .then(() => {
        this.initTicketsConnection(10)
          .subscribe((tickets: PaginateTicket) => {
            this.ticketsSubject.next(tickets);
          });
        this.initPlaylistConnection(10)
          .subscribe((playlist: PaginatePlaylist) => {
            this.playlistSubject.next(playlist);
          });
      })
      .catch(err => {
        console.log('Wrong credentials!');
      });
  }

  private getPlaylist(limit = 10): Observable<PaginatePlaylist> {
    return this.feathersInstance.service('playlist')
      .watch()
      .find({query: {$limit: limit}})
      .pipe(take(1));
  }

  private registerTicketUpdate(): void {
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

  private registerTicketCreated(): void {
    this.feathersInstance.service('playlist')
      .on('created', (data) => {
        this.findAllActive()
          .subscribe((tickets: PaginateTicket) => {
            this.ticketsSubject.next(tickets);
          });
      });
  }

  private registerToPlaylistCreated(): void {
    this.feathersInstance.service('playlist')
      .on('created', (data) => {
        this.getPlaylist()
          .subscribe((tickets: PaginatePlaylist) => {
            this.playlistSubject.next(tickets);
          });
      });
  }

  // expose logout
  public logout() {
    return this.feathersInstance.logout();
  }
}
