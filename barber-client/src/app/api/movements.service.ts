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

  all(params?: MovementParams | any): Observable<PaginateMovement> {
    return this.http.get<PaginateMovement>('api/movements', {params: {...params}});
  }
}

export interface Movement {
  value: number;
  type: Type | string;
  description: string;
}

export class PaginateMovement implements PaginateMovement {
  limit: number;
  skip: number;
  total: number;
  data: Movement[];
}

export interface MovementParams {
  description?: string;
  type?: Type;
  $limit?: number;
  $skip?: number;
  createdAt?: string;
  'createdAt[$lte]'?: string | number;
  'createdAt[$lt]'?: string | number;
  'createdAt[$gte]'?: string | number;
  'createdAt[$gt]'?: string | number;
}

export enum Type {INCOMING = 'INCOMING', OUTGOING = 'OUTGOING'}
