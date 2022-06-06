import { Component, OnInit } from '@angular/core';
import {TerraformModuleApiService} from '../../terrapipe-api/terraform-module/terraform-module-api.service';
import {TerraformModule} from '../../terrapipe-api/terraform-module/terraform-module-model';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {TerraformModuleEditModalComponent} from '../terraform-module-edit-modal/terraform-module-edit-modal.component';

@Component({
  selector: 'app-terraform-module-list',
  templateUrl: './terraform-module-list.component.html',
  styleUrls: ['./terraform-module-list.component.scss']
})
export class TerraformModuleListComponent implements OnInit {
  modules: TerraformModule[] = []
  closeResult = '';

  constructor(private terraformModuleApiService: TerraformModuleApiService,
              private modalService: NgbModal) { }

  ngOnInit(): void {
    this.terraformModuleApiService.getAll().subscribe(modules => this.modules = modules);
  }

  open() {
    this.modalService.open(TerraformModuleEditModalComponent, {ariaLabelledBy: 'modal-basic-title', size: 'lg'}).result.then((result) => {
      this.closeResult = `Closed with: ${JSON.stringify(result)}`;
      this.terraformModuleApiService.create(result).subscribe(
        module => this.modules.push(module)
      )
      console.log(this.closeResult);
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      console.log(this.closeResult);
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
