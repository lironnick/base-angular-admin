import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedComponentsModule } from './components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedComponentsModule,
  ]
})
export class SharedModule { }
