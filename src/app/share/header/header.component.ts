import {Component, Inject, OnInit, Renderer2} from '@angular/core';
import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  theme = 'theme-light';
  constructor(@Inject(DOCUMENT) private document: Document,
              private renderer: Renderer2) { }

  ngOnInit(): void {
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

}
