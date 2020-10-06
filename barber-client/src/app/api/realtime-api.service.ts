import {Injectable} from '@angular/core';

import * as feathersRx from 'feathers-reactive';
import * as io from 'socket.io-client';
import feathers from '@feathersjs/feathers';
import feathersSocketIOClient from '@feathersjs/socketio-client';
import {Observable} from 'rxjs';
import {PaginateTicket} from './tickets.service';

@Injectable({
  providedIn: 'root'
})
export class RealtimeApiService {
  private feathersInstance: any = feathers();
  private socketInstance = io('http://localhost:3031');
  private feathersAuthClient = require('@feathersjs/authentication-client').default;

  constructor() {
    this.feathersInstance
      .configure(feathersSocketIOClient(this.socketInstance))  // add socket.io plugin
      .configure(this.feathersAuthClient({                   // add authentication plugin
        storage: window.localStorage
      }))
      .configure(feathersRx({                           // add feathers-reactive plugin
        idField: '_id'
      }));
  }

  onMonitor(limit: number): Observable<PaginateTicket> {
    return this.feathersInstance.service('tickets')
      .watch()
      .find({
        query: {
          $sort: {createdAt: -1},
          $limit: limit
        }
      });
  }

  // expose authentication
  public authenticate(credentials?): Promise<any> {
    return this.feathersInstance.authenticate(credentials);
  }

  // expose logout
  public logout() {
    return this.feathersInstance.logout();
  }
}
