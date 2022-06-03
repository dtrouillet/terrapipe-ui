import { Component, OnInit } from '@angular/core';
import {AuthConfig, OAuthService} from 'angular-oauth2-oidc';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(private oauthService: OAuthService) { }

  ngOnInit(): void {
  }

  login(){
    this.oauthService.initCodeFlow();
  }



}
