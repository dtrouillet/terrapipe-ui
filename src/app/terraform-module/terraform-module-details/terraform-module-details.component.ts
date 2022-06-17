import {Component, OnInit} from '@angular/core';
import {TerraformModule} from '../../terrapipe-api/terraform-module/terraform-module-model';
import {TerraformModuleApiService} from '../../terrapipe-api/terraform-module/terraform-module-api.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-terraform-module-details',
  templateUrl: './terraform-module-details.component.html',
  styleUrls: []
})
export class TerraformModuleDetailsComponent implements OnInit {
  terraformModule: TerraformModule = {
    id: '',
    name: '',
    url: '',
    branch: '',
    variables: [],
    privateKey: '',
    keyPassphrase: '',
  }

  constructor(private terraformModuleApiService: TerraformModuleApiService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id') || '';
      this.terraformModuleApiService.get(id).subscribe(
        module => this.terraformModule = module
      );
    })
  }

  saveOrUpdate(formModule: HTMLFormElement) {
    this.terraformModuleApiService.create(this.terraformModule).subscribe(
      module => this.router.navigate(['/terraform-module', module.id, 'details'])
    );
  }

  delete() {
    this.terraformModuleApiService.delete(this.terraformModule.id!).subscribe(
      () => this.router.navigate(['/terraform-module'])
    );
  }
}
