import {Component, Inject, OnInit, Renderer2} from '@angular/core';
import {DOCUMENT} from "@angular/common";
import {ConfigurationService} from '../../core/configuration.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  navbarCollapsed: boolean = false;
  private darkMode: boolean = false;
  constructor(@Inject(DOCUMENT) private document: Document,
              private renderer: Renderer2,
              private configurationService: ConfigurationService) { }

  ngOnInit(): void {
    this.configurationService.getNavbarCollapsed().subscribe(value => {
      this.navbarCollapsed = value;
    });
    this.configurationService.getDarkMode().subscribe(value => {
      this.darkMode = value;
      if(this.darkMode){
        this.renderer.addClass(this.document.body, 'theme-dark');
        this.renderer.removeClass(this.document.body, 'theme-light');
      }else {
        this.renderer.removeClass(this.document.body, 'theme-dark');
        this.renderer.addClass(this.document.body, 'theme-light');
      }
    });
  }


  swithTheme(){
    this.configurationService.toggletDarkMode();
  }

  toggleNavbar() {
    this.configurationService.toggleNavbarCollapsed()
  }

}
