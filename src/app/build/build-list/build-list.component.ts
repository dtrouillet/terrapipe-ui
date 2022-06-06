import { Component, OnInit } from '@angular/core';
import {BuildApiService} from '../../terrapipe-api/build/build-api.service';
import {Build} from '../../terrapipe-api/build/build-model';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {BuildEditModalComponent} from '../build-edit-modal/build-edit-modal.component';

@Component({
  selector: 'app-build-list',
  templateUrl: './build-list.component.html',
  styleUrls: ['./build-list.component.scss']
})
export class BuildListComponent implements OnInit {
  builds: Build[] = []
  closeResult = '';

  constructor(private buildApiService: BuildApiService,
              private modalService: NgbModal) { }

  ngOnInit(): void {
    this.buildApiService.getAll().subscribe(builds => this.builds = builds);
  }

  open() {
    this.modalService.open(BuildEditModalComponent, {ariaLabelledBy: 'modal-basic-title', size: 'lg'}).result.then((result) => {
      this.closeResult = `Closed with: ${JSON.stringify(result)}`;
      // this.builds.create(result).subscribe(
      //   module => this.modules.push(module)
      // )
      console.log(this.closeResult);
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      console.log(this.closeResult);
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }


}
