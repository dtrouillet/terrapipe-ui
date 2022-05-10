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


@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    NotificationComponent,
    PageHeaderComponent,
    ErrorComponent
  ],
    exports: [
        HeaderComponent,
        MenuComponent,
        PageHeaderComponent,
        NotificationComponent
    ],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule,
    TablerIconsModule.pick(TablerIcons)
  ]
})
export class ShareModule { }
