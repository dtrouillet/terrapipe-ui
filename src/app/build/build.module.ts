import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuildListComponent } from './build-list/build-list.component';
import { BuildEditModalComponent } from './build-edit-modal/build-edit-modal.component';
import { BuildDetailsComponent } from './build-details/build-details.component';
import {TablerIconsModule} from 'angular-tabler-icons';
import {BuildRoutingModule} from './build-routing.module';



@NgModule({
  declarations: [
    BuildListComponent,
    BuildEditModalComponent,
    BuildDetailsComponent
  ],
  imports: [
    CommonModule,
    TablerIconsModule,
    BuildRoutingModule
  ]
})
export class BuildModule { }
