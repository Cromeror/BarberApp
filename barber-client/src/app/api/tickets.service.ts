import {Injectable} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

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

  create(tickets: Tickets): Observable<Tickets> {
    return this.http.post<Tickets>('api/tickets', tickets);
  }
}

export interface Tickets {
  id?: number;
  position: number;
  userId: number;
  active: boolean;
  // tslint:disable-next-line:variable-name
  finish_date?: string;
  // tslint:disable-next-line:variable-name
  start_date?: string;
}
