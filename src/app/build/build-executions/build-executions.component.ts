import {Component, OnInit} from '@angular/core';
import {Build} from '../../terrapipe-api/build/build-model';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {BuildApiService} from '../../terrapipe-api/build/build-api.service';
import {BuildExecution} from '../../terrapipe-api/build-execution/build-execution-model';
import {BuildExecutionApiService} from '../../terrapipe-api/build-execution/build-execution-api.service';

@Component({
  selector: 'app-build-executions',
  templateUrl: './build-executions.component.html',
  styleUrls: []
})
export class BuildExecutionsComponent implements OnInit {
  build: Build =  {
    id: "",
    name: "",
    terraformModuleId: "",
    terraformState: "",
    variables: []
  }

  buildExecutions: BuildExecution[] = [];

  constructor(private route: ActivatedRoute,
              private buildApiService: BuildApiService,
              private buildExecutionApiService: BuildExecutionApiService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id') || "";
      this.buildApiService.get(id).subscribe(build => {
        this.build = build;
        this.buildExecutionApiService.getAllByBuildId(this.build.id).subscribe(buildExecutions => {
          this.buildExecutions = buildExecutions;
        });
      });
    })
  }

  runBuild() {

  }

  destroyBuild() {

  }

  getExecutionTime(buildExecution: BuildExecution) {
    const start = new Date(buildExecution.startDate).getTime();
    const end = new Date(buildExecution.endDate).getTime();
    if (isNaN(start) || isNaN(end) || end === 0 || start === 0) {
      return "";
    }
    return "" + (end - start) / 1000 + " seconds";
  }
}
