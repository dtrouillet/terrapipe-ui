import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {ApiService} from '../api.service';
import {BuildExecution} from './build-execution-model';

@Injectable()
export class BuildExecutionApiService {

  constructor(private apiService: ApiService) { }

  getAllByBuildId(buildId: string): Observable<BuildExecution[]> {
    return this.apiService.get(`/build-executions?buildId=${buildId}`);
  }
}
