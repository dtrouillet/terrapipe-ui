import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import {TablerIconsModule} from "angular-tabler-icons";
import * as TablerIcons from 'angular-tabler-icons/icons';


@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent
  ],
    imports: [
        CommonModule,
        LoginRoutingModule,
        TablerIconsModule.pick(TablerIcons)
    ]
})
export class LoginModule { }
