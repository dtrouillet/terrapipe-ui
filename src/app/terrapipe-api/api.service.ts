import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class ApiService {
  configService = {"apiUrl": "http://localhost:8080/api"}

  constructor(
    private http: HttpClient,
  ) {
  }


  get(path: string, params: any = new HttpParams()): Observable<any> {
    return this.http.get(
      `${this.configService.apiUrl}${path}`,
      {params, headers: {'Content-Type': 'application/json'}});
  }

  put(path: string, body: object = {}): Observable<any> {
    return this.http.put(
      `${this.configService.apiUrl}${path}`,
      JSON.stringify(body), {
          headers: {'Content-Type': 'application/json'}
        }
    );
  }

  patch(path: string, body: object = {}): Observable<any> {
    return this.http.patch(
      `${this.configService.apiUrl}${path}`,
      JSON.stringify(body),
        {
          headers: {'Content-Type': 'application/json'}
        }
    );
  }

  post(path: string, body: object = {}): Observable<any> {
    return this.http.post(
      `${this.configService.apiUrl}${path}`,
      JSON.stringify(body),
        {
          headers: {'Content-Type': 'application/json'}
        }
    );
  }

  postFile(path: string, body: object = {}, options: object = {}): Observable<any> {
    return this.http.post(
      `${this.configService.apiUrl}${path}`, body, options
    );
  }

  delete(path: string): Observable<any> {
    return this.http.delete(
      `${this.configService.apiUrl}${path}`,
        {
          headers: {'Content-Type': 'application/json'}
        }
    );
  }
}
