import { Injectable } from '@angular/core';
import { LocalStoreService } from "./local-store.service";
import { Router } from "@angular/router";
import { of } from "rxjs";
import { delay } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authenticated = true;

  constructor(private store: LocalStoreService, private router: Router) {
    this.checkAuth();
  }

  checkAuth() {
    // this.authenticated = this.store.getItem("mark2");
  }

  getuser() {
    return of({});
  }

  signin(credentials) {
    this.authenticated = true;
    this.store.setItem("mark2", true);
    return of({}).pipe(delay(1500));
  }
  
  signout() {
    this.authenticated = false;
    this.store.setItem("mark2", false);
    this.router.navigateByUrl('');
  }

}
