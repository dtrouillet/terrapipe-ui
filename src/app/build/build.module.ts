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
import {
  TerraformBuildLogsModalComponent
} from './build-executions/terraform-build-logs-modal/terraform-build-logs-modal.component';
import {NgTerminalModule} from 'ng-terminal';



@NgModule({
  declarations: [
    BuildListComponent,
    BuildDetailsComponent,
    BuildMenuComponent,
    BuildVariablesComponent,
    BuildExecutionsComponent,
    TerraformBuildLogsModalComponent
  ],
  imports: [
    CommonModule,
    TablerIconsModule,
    BuildRoutingModule,
    FormsModule,
    NgbModule,
    NgTerminalModule
  ]
})
export class BuildModule { }
