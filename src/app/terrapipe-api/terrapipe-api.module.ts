import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TerraformModuleApiService} from './terraform-module/terraform-module-api.service';
import {ApiService} from './api.service';
import {BuildApiService} from './build/build-api.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ApiService,
    TerraformModuleApiService,
    BuildApiService
  ],
})
export class TerrapipeApiModule { }
