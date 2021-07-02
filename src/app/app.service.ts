import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  urlBase = environment.apiUrl;
  loading: boolean; 
  
  constructor(private httpClient: HttpClient) { }

  getApi(endpoint){
    setTimeout(() => { this.loading = true }, 0);
    return new Promise((resolve, reject) => {
      this.httpClient.get(this.urlBase + endpoint).subscribe(
        (data) => {
          resolve(data);
          this.loading = false;
        },
        (error) => {
          reject(error);
        }
      );
    });
  }
}
