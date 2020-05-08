import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { LayoutsModule } from './layouts/layouts.module';

const components = [
];

@NgModule({
  imports: [
    NgbModule,
    CommonModule,
    RouterModule,
    LayoutsModule,
    PerfectScrollbarModule,
  ],
  declarations: components,
  exports: components
})
export class SharedComponentsModule { }
