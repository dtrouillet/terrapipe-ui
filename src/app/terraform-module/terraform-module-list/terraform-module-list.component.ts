import { Component, OnInit } from '@angular/core';
import {TerraformModuleApiService} from '../../terrapipe-api/terraform-module/terraform-module-api.service';
import {TerraformModule} from '../../terrapipe-api/terraform-module/terraform-module-model';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

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

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'lg'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
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
