import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UptimeRoutingModule } from './uptime-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import {ShareModule} from '../share/share.module';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    UptimeRoutingModule,
    ShareModule
  ]
})
export class UptimeModule { }
