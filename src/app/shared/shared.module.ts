import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { SharedComponentsModule } from './components/shared-components.module';

@NgModule({
  imports: [
    NgbModule,
    CommonModule,
    RouterModule,
    SharedComponentsModule,
    PerfectScrollbarModule,
  ]
})
export class SharedModule { }
