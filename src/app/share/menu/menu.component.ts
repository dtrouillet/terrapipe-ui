import { Component, OnInit } from '@angular/core';
import {ConfigurationService} from '../../core/configuration.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  navbarCollapsed: boolean = false;
  constructor(private configurationService: ConfigurationService) { }

  ngOnInit(): void {
    this.configurationService.getNavbarCollapsed().subscribe(value => {
      this.navbarCollapsed = value;
    });
  }

  stickyTop(): void{
    this.configurationService.toggletStickyTop()
  }

}
