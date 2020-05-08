import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AdminLayoutSidebarComponent } from './admin-layout-sidebar/admin-layout-sidebar.component';
import { HeaderSidebarComponent } from './admin-layout-sidebar/header-sidebar/header-sidebar.component';
import { SidebarComponent } from './admin-layout-sidebar/sidebar/sidebar.component'
import { FooterComponent } from '../footer/footer.component';

import { AuthLayoutComponent } from './auth-layout/auth-layout.component'

import { MaterialModule } from '../../../material.module';


const components = [
  AdminLayoutSidebarComponent,
  HeaderSidebarComponent,
  SidebarComponent,
  FooterComponent,
  AuthLayoutComponent
];

@NgModule({
  imports: [
    NgbModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    MaterialModule,
    PerfectScrollbarModule
  ],
  declarations: components,
  exports: components
})
export class LayoutsModule { }
