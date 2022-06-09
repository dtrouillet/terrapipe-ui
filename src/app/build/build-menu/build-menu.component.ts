import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-build-menu',
  templateUrl: './build-menu.component.html',
  styleUrls: []
})
export class BuildMenuComponent implements OnInit {
  @Input() id: string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
