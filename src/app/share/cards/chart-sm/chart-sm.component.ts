import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-chart-sm',
  templateUrl: './chart-sm.component.html',
  styleUrls: ['./chart-sm.component.scss']
})
export class ChartSmComponent implements OnInit {

  @Input() chartOptions: any;
  @Input() title: string = "";
  @Input() dropdownItems: any[] = [];
  @Input() metric: string = "";
  @Input() evolution: number | undefined;
  @Input() chartName: string = "";
  @Input() inBody: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
