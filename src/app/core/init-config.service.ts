import {Injectable} from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {ConfigurationService} from './configuration.service';
import {environment} from '../../environments/environment';


@Injectable()
export class InitConfigService {

  constructor(private httpClient: HttpClient, private configService: ConfigurationService) {
  }

  loadConfig(): Promise<boolean> {
    // @ts-ignore
    return this.httpClient.get(environment.configLocation).toPromise().then((x: ConfigurationService) => {
      this.configService.baseUrl = x.baseUrl;
      this.configService.apiUrl = x.apiUrl;
      this.configService.issuer = x.issuer;
      return true;
    }).catch((error) => {
      this.configService.apiUrl = '/api';
      console.warn(error);
      console.warn('error, default config loaded');
      return true;
    });
  }
}
