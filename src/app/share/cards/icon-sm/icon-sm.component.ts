import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-icon-sm',
  templateUrl: './icon-sm.component.html',
  styleUrls: ['./icon-sm.component.scss']
})
export class IconSmComponent implements OnInit {
  @Input() icon: string = "";
  @Input() line1: string = "";
  @Input() line2: string = "";
  @Input() color: string = "black";
  classBgColor: string = "";
  constructor() { }

  ngOnInit(): void {
    this.classBgColor = "bg-" + this.color
  }

}
