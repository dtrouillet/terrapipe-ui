import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import {DashboardComponent} from './dashboard/dashboard.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ShareModule} from '../share/share.module';
import {TablerIconsModule} from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';
import {NgApexchartsModule} from 'ng-apexcharts';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgbModule,
    ShareModule,
    TablerIconsModule.pick(TablerIcons),
    NgApexchartsModule,
    HttpClientModule
  ]
})
export class HomeModule { }
