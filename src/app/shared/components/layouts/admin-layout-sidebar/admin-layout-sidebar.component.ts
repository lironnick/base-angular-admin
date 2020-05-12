import { Component, OnInit } from '@angular/core';

import { BreadcrumbService } from '../../../services/breadcrumb.service';
import { LoadingService } from '../../../services/loading.service';

@Component({
  selector: 'app-admin-layout-sidebar',
  templateUrl: './admin-layout-sidebar.component.html',
  styleUrls: ['./admin-layout-sidebar.component.css']
})
export class AdminLayoutSidebarComponent implements OnInit {

  constructor(
    private breadcrumbService: BreadcrumbService,
    private loadingService: LoadingService,
    ) { }

  ngOnInit(): void {
  }

  get title(): any {
    return this.breadcrumbService.breadcrumbData.title;
  }

  get crumb(): any {
    return this.breadcrumbService.breadcrumbData.breadcrumb;
  }

  get loading(): any {
    return this.loadingService.loadingData.status;
  }

}
