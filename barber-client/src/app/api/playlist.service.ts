import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {Pagination} from './utils/pagination';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
  form: FormGroup;

  constructor(private http: HttpClient, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      id: [null],
      url: [null, Validators.required]
    });
  }

  create(video: Video): Observable<Video> {
    return this.http.post<Video>('api/playlist', video);
  }

  all(params?: PlaylistParam): Observable<PaginatePlaylist> {
    return this.http.get<PaginatePlaylist>('api/playlist', {params: {...params}});
  }
}

export interface PlaylistParam {
  $skip?: string;
  $limit?: string;
}

export interface Video {
  id: string;
  url: string;
}

export class PaginatePlaylist implements Pagination {
  limit: number;
  skip: number;
  total: number;
  data: Video[];
}
