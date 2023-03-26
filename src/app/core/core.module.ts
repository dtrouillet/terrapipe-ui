import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ConfigurationService} from './configuration.service';
import {InitConfigService} from './init-config.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ConfigurationService,
    InitConfigService
  ]
})
export class CoreModule { }
