import { Component, OnInit } from '@angular/core';

import { BreadcrumbService } from '../../../services/breadcrumb.service';

@Component({
  selector: 'app-admin-layout-sidebar',
  templateUrl: './admin-layout-sidebar.component.html',
  styleUrls: ['./admin-layout-sidebar.component.css']
})
export class AdminLayoutSidebarComponent implements OnInit {

  constructor(private breadcrumbService: BreadcrumbService) { }

  ngOnInit(): void {
  }

  get title(): any {
    return this.breadcrumbService.breadcrumbData.title;
  }

  get crumb(): any {
    return this.breadcrumbService.breadcrumbData.breadcrumb;
  }

}
