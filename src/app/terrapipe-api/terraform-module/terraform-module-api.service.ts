import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {TerraformModule} from './terraform-module-model';
import {ApiService} from '../api.service';

@Injectable()
export class TerraformModuleApiService {

  constructor(private apiService: ApiService) { }

  getAll(): Observable<TerraformModule[]> {
    return this.apiService.get(`/terraform-module`);
  }

}
