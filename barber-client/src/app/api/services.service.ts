import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {Pagination} from './utils/pagination';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  form: FormGroup;

  constructor(private http: HttpClient,
              private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      id: [null],
      name: [null, Validators.required],
      price: [null, Validators.required],
      gender: [null, Validators.required],
      grown_state: [null, Validators.required]
    });
  }

  create(service: Service): Observable<Service> {
    return this.http.post<Service>('api/services', service);
  }

  update(service: Service, id: number): Observable<Service> {
    return this.http.patch<Service>(`api/services/${id}`, service);
  }

  all(params?: ServiceParam): Observable<PaginateService> {
    return this.http.get<PaginateService>('api/services', {params: {...params}});
  }
}

export interface ServiceParam {
  gender?: string;
  grown_stage?: string;
}

export class Service {
  id?: number;
  name: string;
  price: number;
  gender: 'adult' | 'teen' | 'kid';
  // tslint:disable-next-line:variable-name
  grown_state: 'man' | 'woman' | 'other';
}

export class PaginateService implements Pagination {
  limit: number;
  skip: number;
  total: number;
  data: Service[];
}
