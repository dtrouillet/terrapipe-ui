import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuildListComponent } from './build-list/build-list.component';
import { BuildDetailsComponent } from './build-details/build-details.component';
import {TablerIconsModule} from 'angular-tabler-icons';
import {BuildRoutingModule} from './build-routing.module';
import {FormsModule} from '@angular/forms';
import { BuildMenuComponent } from './build-menu/build-menu.component';
import { BuildVariablesComponent } from './build-variables/build-variables.component';
import { BuildExecutionsComponent } from './build-executions/build-executions.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    BuildListComponent,
    BuildDetailsComponent,
    BuildMenuComponent,
    BuildVariablesComponent,
    BuildExecutionsComponent
  ],
  imports: [
    CommonModule,
    TablerIconsModule,
    BuildRoutingModule,
    FormsModule,
    NgbModule
  ]
})
export class BuildModule { }
