import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutSidebarComponent } from './shared/components/layouts/admin-layout-sidebar/admin-layout-sidebar.component';
import { AuthLayoutComponent } from './shared/components/layouts/auth-layout/auth-layout.component'
import { BlankLayoutComponent } from './shared/components/layouts/blank-layout/blank-layout.component';

const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
  },
  {
    path: 'dashboard',
    component: AdminLayoutSidebarComponent,
  },
  {
    path: '',
    component: BlankLayoutComponent,
    children: [
      {
        path: 'others',
        loadChildren: () => import('./view/others/others.module').then(m => m.OthersModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'others/404'
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
