import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGaurd } from './shared/services/auth.gaurd';

import { AdminLayoutSidebarComponent } from './shared/components/layouts/admin-layout-sidebar/admin-layout-sidebar.component';
import { AuthLayoutComponent } from './shared/components/layouts/auth-layout/auth-layout.component'
import { BlankLayoutComponent } from './shared/components/layouts/blank-layout/blank-layout.component';


const adminRoutes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'usuarios',
    loadChildren: () => import('./views/user/user.module').then(m => m.UserModule),
    data: {
      breadcrumb: 'usuarios'
    }
  },

];

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'dashboard/v1',
  //   pathMatch: 'full'
  // },
  {
    path: '',
    component: AuthLayoutComponent,
  },
  {
    path: '',
    component: AdminLayoutSidebarComponent,
    canActivate: [AuthGaurd],
    children: adminRoutes
  },
  {
    path: '',
    component: BlankLayoutComponent,
    children: [
      {
        path: 'others',
        loadChildren: () => import('./views/others/others.module').then(m => m.OthersModule)
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
