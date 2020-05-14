import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { BreadcrumbService } from '../../../shared/services/breadcrumb.service';
import { LoadingService } from '../../../shared/services/loading.service';
import { UserService } from '../../../shared/services/user.service';
import { SnackbarService } from '../../../shared/services/snackbar.service';
import { IUser } from './user.model'


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  userForm: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private breadcrumbService: BreadcrumbService,
    private loadingService: LoadingService,
    private userService: UserService,
    private snackbarService: SnackbarService
    ) { 
    breadcrumbService.breadcrumbData = {
      title: 'Usuarios',
      breadcrumb: [ 
        {text: 'Usuarios', link: '/usuarios'}, 
        {text: 'Adicionar'}, 
      ]
    }
  }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.userForm = this.fb.group({
      name: [null, [ Validators.required, Validators.minLength(3)] ],
      login: [null, [ Validators.required, Validators.minLength(3)] ],
      password: [null, [ Validators.required, Validators.minLength(5)] ],
    });
  }

  add() {

    this.loading(true);
    const user: IUser = this.userForm.value;

    console.log(user);

    this.userService.add(user)
      .subscribe(res => {
        this.snackbarService.success = {
            type: 'success',
            text: `Usuário ${user.name} cadastrado com sucesso!`
        };
        this.router.navigateByUrl('/usuarios');
      }, error => {
        this.snackbarService.success = { type: 'danger', text: error.error.error };
        this.loading(false);
      });
  }

  loading(status) {
    this.loadingService.loadingData.status = status;
  }

}
