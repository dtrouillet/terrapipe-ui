import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-terraform-build-logs-modal',
  templateUrl: './terraform-build-logs-modal.component.html',
  styleUrls: []
})
export class TerraformBuildLogsModalComponent implements OnInit {
  @Input() logs: string | undefined;

  constructor(public modal: NgbActiveModal) { }

  ngOnInit(): void {
  }


}
