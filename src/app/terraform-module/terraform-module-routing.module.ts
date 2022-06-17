import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TerraformModuleListComponent} from './terraform-module-list/terraform-module-list.component';
import {TerraformModuleDetailsComponent} from './terraform-module-details/terraform-module-details.component';

const routes: Routes = [
  {
    path: '',
    component: TerraformModuleListComponent
  },
  {
    path: ':id/details',
    component: TerraformModuleDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TerraformModuleRoutingModule { }
