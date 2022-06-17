import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
import {BuildExecutionApiService} from '../../terrapipe-api/build-execution/build-execution-api.service';

@Component({
  selector: 'app-build-menu',
  templateUrl: './build-menu.component.html',
  styleUrls: []
})
export class BuildMenuComponent implements OnInit {
  @Input() id: string = '';
  numberOfBuildExecutions: number = 0;
  constructor(private buildExecutionApiService: BuildExecutionApiService) { }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['id']) {
      if(this.id){
        this.buildExecutionApiService.getAllByBuildId(this.id).subscribe(buildExecutions => {
          this.numberOfBuildExecutions = buildExecutions.length;
        });
      }
    }
  }

}
