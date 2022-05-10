import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public getAccessToken(): string {
    return "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOLFJPTEVfVVNFUiIsImV4cCI6MTY1MjIxNjQxOH0.fjPOhTxxNHfS4qfHi67Zlj1gOchKR0dmYAtG1oy2q6uryBXUFNVLWXlSEw1yv3wa_a4hYI6ovH_oJxFWd4o12Q";
  }
}
