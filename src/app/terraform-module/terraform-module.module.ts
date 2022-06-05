import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TerraformModuleListComponent } from './terraform-module-list/terraform-module-list.component';
import {TerraformModuleRoutingModule} from './terraform-module-routing.module';
import {TablerIconsModule} from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';



@NgModule({
  declarations: [
    TerraformModuleListComponent
  ],
  imports: [
    CommonModule,
    TerraformModuleRoutingModule,
    TablerIconsModule.pick(TablerIcons)
  ]
})
export class TerraformModuleModule { }
