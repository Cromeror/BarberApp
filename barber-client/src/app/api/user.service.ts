import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Pagination} from './utils/pagination';

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

  all(params?: UserParams): Observable<PaginateUser> {
    return this.http.get<PaginateUser>('api/users', {params: {...params}});
  }
}

interface UserParams {
  email?: string;
  phone?: string;
  age?: string;
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
  email?: string;
  password?: string;
  nickname?: string;
}

export class PaginateUser implements Pagination {
  limit: number;
  skip: number;
  total: number;
  data: User[];
}
