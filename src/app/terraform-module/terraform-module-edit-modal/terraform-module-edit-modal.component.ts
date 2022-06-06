import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {TerraformModule} from '../../terrapipe-api/terraform-module/terraform-module-model';

@Component({
  selector: 'app-terraform-module-edit-modal',
  templateUrl: './terraform-module-edit-modal.component.html',
  styleUrls: []
})
export class TerraformModuleEditModalComponent implements OnInit {
  isUpdate = false;
  terraformModule: TerraformModule = {
    branch: '', id: '', keyPassphrase: '', name: '', privateKey: '', url: '', variables: []
  };

  constructor(public modal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  createOrUpdate(terraformModuleForm: HTMLFormElement) {
    if ( !terraformModuleForm.checkValidity() ) {
      return;
    }
    this.modal.close(this.terraformModule);
  }

}
