import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {MenuComponent} from './menu/menu.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {TablerIconsModule} from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';
import {NotificationComponent} from './notification/notification.component';
import {PageHeaderComponent} from './page-header/page-header.component';
import {RouterModule} from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { FooterComponent } from './footer/footer.component';
import { ChartSmComponent } from './cards/chart-sm/chart-sm.component';
import {NgApexchartsModule} from 'ng-apexcharts';
import { IconSmComponent } from './cards/icon-sm/icon-sm.component';


@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    NotificationComponent,
    PageHeaderComponent,
    ErrorComponent,
    FooterComponent,
    ChartSmComponent,
    IconSmComponent,
  ],
  exports: [
    HeaderComponent,
    MenuComponent,
    PageHeaderComponent,
    NotificationComponent,
    FooterComponent,
    ChartSmComponent,
    IconSmComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule,
    NgApexchartsModule,
    TablerIconsModule.pick(TablerIcons)
  ]
})
export class ShareModule { }
