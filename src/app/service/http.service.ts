import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpService {

  constructor(public httpClient: HttpClient) {
  }
  getheader() {
    var headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
      'Access-Control-Allow-Headers': '*',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + environment.token,
    });
    var options = { headers: headers };
    return options;
  }

  get() {
    var url = environment.apiUrl + "/templates/-xdNcNKYtTFG/data";
    return this.httpClient.get(url, this.getheader());
  }


}
