import {Component, ElementRef, Inject, OnInit, Renderer2, ViewChild} from '@angular/core';
import {DOCUMENT} from "@angular/common";
import {TablerIconComponent} from "angular-tabler-icons";
import {ConfigurationService} from '../../core/configuration.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  theme = 'theme-light';
  navbarCollapsed: boolean = false;

  constructor(@Inject(DOCUMENT) private document: Document,
              private renderer: Renderer2,
              private configurationService: ConfigurationService) { }

  ngOnInit(): void {
    this.configurationService.getNavbarCollapsed().subscribe(value => {
      this.navbarCollapsed = value;
    });
  }


  swithTheme(){
    if(this.theme === 'theme-light'){
      this.renderer.addClass(this.document.body, 'theme-dark');
      this.renderer.removeClass(this.document.body, 'theme-light');
      this.theme = 'theme-dark';
    }else {
      this.renderer.removeClass(this.document.body, 'theme-dark');
      this.renderer.addClass(this.document.body, 'theme-light');
      this.theme = 'theme-light';
    }
  }

  toggleNavbar() {
    this.configurationService.toggleNavbarCollapsed()
  }

}
