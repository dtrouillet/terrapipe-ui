import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {TablerIconsModule} from "angular-tabler-icons";
import * as TablerIcons from 'angular-tabler-icons/icons';
import { NotificationComponent } from './notification/notification.component';
import { PageHeaderComponent } from './page-header/page-header.component';


@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    NotificationComponent,
    PageHeaderComponent
  ],
  exports: [
    HeaderComponent,
    MenuComponent,
    PageHeaderComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    TablerIconsModule.pick(TablerIcons)
  ]
})
export class ShareModule { }
