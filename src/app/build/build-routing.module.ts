import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BuildListComponent} from './build-list/build-list.component';
import {BuildDetailsComponent} from './build-details/build-details.component';
import {BuildVariablesComponent} from './build-variables/build-variables.component';
import {BuildExecutionsComponent} from './build-executions/build-executions.component';

const routes: Routes = [
  {
    path: '',
    component: BuildListComponent
  },
  {
    path: ':id/informations',
    component: BuildDetailsComponent
  },
  {
    path: ':id/variables',
    component: BuildVariablesComponent
  },
  {
    path: ':id/executions',
    component: BuildExecutionsComponent
  },
  {
    path: ':id',
    redirectTo: ':id/informations'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuildRoutingModule { }
