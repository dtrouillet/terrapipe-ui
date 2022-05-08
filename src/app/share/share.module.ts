import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {TablerIconsModule} from "angular-tabler-icons";
import * as TablerIcons from 'angular-tabler-icons/icons';
import { NotificationComponent } from './notification/notification.component';


@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    NotificationComponent
  ],
  exports: [
    HeaderComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
      TablerIconsModule.pick(TablerIcons)
  ]
})
export class ShareModule { }
