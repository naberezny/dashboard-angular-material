import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  urlBase = environment.apiUrl;
  
  constructor(private httpClient: HttpClient) { }
  
  getApi(endpoint){
    return new Promise((resolve, reject) => {
      this.httpClient.get(this.urlBase + endpoint).subscribe(
        (data) => {
          resolve(data);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }
}
