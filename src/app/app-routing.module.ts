import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutSidebarComponent } from './shared/components/layouts/admin-layout-sidebar/admin-layout-sidebar.component';

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutSidebarComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
