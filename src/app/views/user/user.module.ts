import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { UserRoutingModule } from './user-routing.module';


import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MaterialModule } from '../../material.module';

import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';






@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    UserRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    
  ],
  declarations: [ListComponent, CreateComponent]
})
export class UserModule { }
