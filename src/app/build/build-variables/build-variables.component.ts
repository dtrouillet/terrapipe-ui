import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Build, TerraformVariable} from '../../terrapipe-api/build/build-model';
import {TerraformModule, TerraformModuleVariable} from '../../terrapipe-api/terraform-module/terraform-module-model';
import {BuildApiService} from '../../terrapipe-api/build/build-api.service';
import {TerraformModuleApiService} from '../../terrapipe-api/terraform-module/terraform-module-api.service';

@Component({
  selector: 'app-build-variables',
  templateUrl: './build-variables.component.html',
  styleUrls: []
})
export class BuildVariablesComponent implements OnInit {
  build: Build =  {
    id: "",
    name: "",
    terraformModuleId: "",
    terraformState: "",
    variables: []
  }

  terraformModule: TerraformModule = {
    id: "",
    name:  "",
    branch:  "",
    url:  "",
    variables: [],
    privateKey:  "",
    keyPassphrase:  "",
  }

  variablesMaps: Map<string, TerraformVariable> = new Map<string, TerraformVariable>();

  constructor(private route: ActivatedRoute,
              private buildApiService: BuildApiService,
              private terraformModuleApiService: TerraformModuleApiService) { }
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      var id = params.get('id') || "";
      this.buildApiService.get(id).subscribe(build => {
        this.build = build;
        if( build.variables ) {
          for (let variable of this.build.variables) {
            this.variablesMaps.set(variable.name, variable);
          }
        }
        this.terraformModuleApiService.get(build.terraformModuleId).subscribe(module => {
          this.terraformModule = module
        });
      });
    })
  }

}
