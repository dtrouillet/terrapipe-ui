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

}
