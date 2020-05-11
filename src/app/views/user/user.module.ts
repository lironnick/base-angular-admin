import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ListComponent } from './list/list.component';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../../material.module';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    UserRoutingModule,
    MaterialModule
  ],
  declarations: [ListComponent]
})
export class UserModule { }
