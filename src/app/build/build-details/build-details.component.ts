import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router, RouterModule} from '@angular/router';
import {Build} from '../../terrapipe-api/build/build-model';
import {BuildApiService} from '../../terrapipe-api/build/build-api.service';
import {TerraformModule} from '../../terrapipe-api/terraform-module/terraform-module-model';
import {TerraformModuleApiService} from '../../terrapipe-api/terraform-module/terraform-module-api.service';

@Component({
  selector: 'app-build-details',
  templateUrl: './build-details.component.html',
  styleUrls: []
})
export class BuildDetailsComponent implements OnInit {
  isNew = false;
  build: Build =  {
    id: "",
    name: "",
    terraformModuleId: "",
    terraformState: "",
    variables: []
  }

  terraformModules: TerraformModule[] = []

  constructor(private route: ActivatedRoute,
              private buildApiService: BuildApiService,
              private terraformModuleApiService: TerraformModuleApiService,
              private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      var id = params.get('id') || "";
      if( id === "new") {
        this.isNew = true;
        return;
      }
      this.buildApiService.get(id).subscribe(build => this.build = build);
    })

    this.terraformModuleApiService.getAll().subscribe(modules => this.terraformModules = modules);
  }

  saveOrUpdate(formBuild: HTMLFormElement) {
    if ( !this.isNew ) {
      return;
    }
    if (!formBuild.checkValidity()) {
      return
    }
    this.buildApiService.save(this.build).subscribe(
      build => this.router.navigate(['/build', build.id])
    )
  }

  delete() {
    this.buildApiService.delete(this.build.id).subscribe(
      () => this.router.navigate(['/build'])
    )
  }
}
