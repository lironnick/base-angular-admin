import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../../services/auth.service';

export interface ILogin {
  login: string;
  password: string;
}

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.css']
})
export class AuthLayoutComponent implements OnInit {

  loading: boolean;
  hide = true;
  loginForm: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private auth: AuthService,
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.loginForm = this.fb.group({
      login: [null, [ Validators.required, Validators.minLength(3)] ],
      password: [null, [ Validators.required, Validators.minLength(5)] ],
    });
  }

  logar() {
    this.loading = true;
    const login: ILogin = this.loginForm.value;

    console.log(login);

    this.auth.signin(login)
      .subscribe(res => {
          this.router.navigateByUrl('/dashboard');
          this.loading = false;
      });
  }

}
