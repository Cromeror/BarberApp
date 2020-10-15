import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Pagination} from './utils/pagination';
import {Ticket} from './tickets.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  form: FormGroup;

  constructor(private http: HttpClient,
              private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name: [null, Validators.required],
      last_name: [null, Validators.required],
      phone: [null, Validators.required],
      age: [null, Validators.required],
      gender: [null, Validators.required],
      grown_state: [null, Validators.required],
      email: [null, Validators.email],
      password: [null],
      nickname: [null],
      agree: [null]
    });
  }

  create(user: User): Observable<User> {
    return this.http.post<User>('api/users', user);
  }

  update(user: PartialUser, id: number): Observable<User> {
    return this.http.patch<User>('api/users/' + id, user);
  }

  all(params?: UserParams): Observable<PaginateUser> {
    return this.http.get<PaginateUser>('api/users', {params: {...params}});
  }
}

interface UserParams {
  email?: string;
  phone?: string;
  age?: string;
  type?: string;
}

export interface User {
  id?: number;
  name: string;
  // tslint:disable-next-line:variable-name
  last_name: string;
  phone: string;
  age: number;
  gender: 'man' | 'woman';
  grown_state: 'kids' | 'teen' | 'adult';
  type: 'client' | 'admin';
  email?: string;
  password?: string;
  nickname?: string;
}

export interface ResponseUser {
  id?: number;
  name: string;
  // tslint:disable-next-line:variable-name
  last_name: string;
  phone: string;
  age: number;
  gender: 'man' | 'woman';
  grown_state: 'kids' | 'teen' | 'adult';
  type: 'client' | 'admin';
  email?: string;
  password?: string;
  nickname?: string;
  tickets?: Ticket[];
}

export class PaginateUser implements Pagination {
  limit: number;
  skip: number;
  total: number;
  data: ResponseUser[];
}

export interface PartialUser {
  name?: string;
  // tslint:disable-next-line:variable-name
  last_name?: string;
  phone?: string;
  age?: number;
  gender?: 'man' | 'woman';
  grown_state?: 'kids' | 'teen' | 'adult';
  email?: string;
  nickname?: string;
  active?: boolean;
}
