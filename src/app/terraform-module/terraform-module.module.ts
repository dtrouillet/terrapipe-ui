import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TerraformModuleListComponent } from './terraform-module-list/terraform-module-list.component';
import {TerraformModuleRoutingModule} from './terraform-module-routing.module';
import {TablerIconsModule} from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';
import { TerraformModuleEditModalComponent } from './terraform-module-edit-modal/terraform-module-edit-modal.component';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    TerraformModuleListComponent,
    TerraformModuleEditModalComponent
  ],
  imports: [
    CommonModule,
    TerraformModuleRoutingModule,
    TablerIconsModule.pick(TablerIcons),
    FormsModule
  ]
})
export class TerraformModuleModule { }
