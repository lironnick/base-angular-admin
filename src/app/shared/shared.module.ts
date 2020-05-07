import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SharedComponentsModule } from './components/shared-components.module';

@NgModule({
  imports: [
    NgbModule,
    CommonModule,
    RouterModule,
    SharedComponentsModule,
  ]
})
export class SharedModule { }
