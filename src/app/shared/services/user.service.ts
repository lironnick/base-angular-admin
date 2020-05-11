import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

const headers = new HttpHeaders().set("authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTg5MjA2MzE2fQ.g9DrZzfmLb07JIuq1SoH00mdk8CRhRdKe2aZJWIjFTs");
// import { config } from 'src/app/config';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get( `${environment.apiUrl}/users`, {headers});
  }
}
