import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MytestComponent } from './mytest/mytest.component';
import {TestRouting} from "./test.routing";
import {ShareModule} from "../share/share.module";



@NgModule({
  declarations: [
    MytestComponent
  ],
  imports: [
    CommonModule,
    TestRouting,
    ShareModule
  ]
})
export class TestModule { }
