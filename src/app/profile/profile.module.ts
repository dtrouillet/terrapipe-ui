import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import {SettingsComponent} from './settings/settings.component';
import {AccountComponent} from './account/account.component';
import {ShareModule} from '../share/share.module';


@NgModule({
  declarations: [
    SettingsComponent,
    AccountComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    ShareModule
  ]
})
export class ProfileModule { }
