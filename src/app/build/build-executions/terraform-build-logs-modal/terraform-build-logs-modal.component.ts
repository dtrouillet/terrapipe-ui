import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {NgTerminal} from 'ng-terminal';

@Component({
  selector: 'app-terraform-build-logs-modal',
  templateUrl: './terraform-build-logs-modal.component.html',
  styleUrls: []
})
export class TerraformBuildLogsModalComponent implements OnInit, AfterViewInit {
  // @ts-ignore
  @Input() logs: string[];
  // @ts-ignore
  @ViewChild('term', {static: false}) child: NgTerminal;

  constructor(public modal: NgbActiveModal) {
  }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    this.logs.forEach(
      (log) => {
        this.child.write(log +" \n\r");
      }
    );
  }
}
