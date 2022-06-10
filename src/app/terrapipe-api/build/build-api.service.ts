import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {ApiService} from '../api.service';
import {Build, TerraformVariable} from './build-model';

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

  saveVariables(id: string, variables: TerraformVariable[]) {
    return this.apiService.put(`/build/vars/${id}`, variables);
  }

  run(id: string) {
    return this.apiService.post(`/build/run/${id}`);
  }

  destroy(id: string) {
    return this.apiService.post(`/build/destroy/${id}`);
  }
}
