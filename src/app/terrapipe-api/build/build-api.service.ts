import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {ApiService} from '../api.service';
import {Build} from './build-model';

@Injectable()
export class BuildApiService {

  constructor(private apiService: ApiService) { }

  getAll(): Observable<Build[]> {
    return this.apiService.get(`/build`);
  }

  get(id: string): Observable<Build> {
    return this.apiService.get(`/build/${id}`);
  }

  save(build: Build) {
    return this.apiService.put(`/build`, build);
  }

  delete(id: string): Observable<void> {
    return this.apiService.delete(`/build/${id}`);
  }
}
