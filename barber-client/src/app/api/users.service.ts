import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  form: FormGroup;

  constructor(private http: HttpClient,
              private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name: [null, Validators.required],
      last_name: [null, Validators.required],
      phone: [null, Validators.required],
      email: [null, Validators.email],
      password: [null],
      nickname: [null],
      agree: [null]
    });
  }

  create(user: User): Observable<User> {
    return this.http.post<User>('api/users', user);
  }
}

export class User {
  name: string;
  // tslint:disable-next-line:variable-name
  last_name: string;
  phone: string;
  email?: string;
  password?: string;
  nickname?: string;
}
