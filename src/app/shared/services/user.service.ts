import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

import { IUser } from '../../views/user/create/user.model'

const headers = new HttpHeaders().set("authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTg5MzEzMDUyfQ.rpTm926ZkbLpfXylqHeMkxAUUQ1Ow2wRV8ot2aKnMAs");

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get( `${environment.apiUrl}/users`, {headers});
  }

  add(user: IUser) {
    return this.http.post( `${environment.apiUrl}/users`, user, {headers});
  }
}
