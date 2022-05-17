import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-metrics',
  templateUrl: './metrics.component.html',
  styleUrls: ['./metrics.component.scss']
})
export class MetricsComponent implements OnInit {
  @Input() text: string | number = '';
  @Input() title: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
