import { Component, OnInit } from '@angular/core';
import {BuildApiService} from '../../terrapipe-api/build/build-api.service';
import {Build} from '../../terrapipe-api/build/build-model';

@Component({
  selector: 'app-build-list',
  templateUrl: './build-list.component.html',
  styleUrls: []
})
export class BuildListComponent implements OnInit {
  builds: Build[] = []

  constructor(private buildApiService: BuildApiService) { }

  ngOnInit(): void {
    this.buildApiService.getAll().subscribe(builds => this.builds = builds);
  }

}
