import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovementsService {

  constructor(private http: HttpClient) {
  }

  create(movement: Movement): Observable<Movement> {
    return this.http.post<Movement>('api/movements', movement);
  }
}

export interface Movement {
  value: number;
  type: Type | string;
}

export class PaginateMovement implements PaginateMovement {
  limit: number;
  skip: number;
  total: number;
  data: Movement[];
}

export enum Type {INCOMING = 'INCOMING', OUTGOING = 'OUTGOING'}
