import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TerraformModuleListComponent} from './terraform-module-list/terraform-module-list.component';

const routes: Routes = [
  {
    path: '',
    component: TerraformModuleListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TerraformModuleRoutingModule { }
