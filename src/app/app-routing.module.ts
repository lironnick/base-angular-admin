import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutSidebarComponent } from './shared/components/layouts/admin-layout-sidebar/admin-layout-sidebar.component';
import { AuthLayoutComponent } from './shared/components/layouts/auth-layout/auth-layout.component'

const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
  },
  {
    path: 'dashboard',
    component: AdminLayoutSidebarComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
