import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '../../../shared/services/breadcrumb.service';

@Component({
  selector: 'app-dashboad-default',
  templateUrl: './dashboad-default.component.html',
  styleUrls: ['./dashboad-default.component.css']
})
export class DashboadDefaultComponent implements OnInit {

  constructor(private breadcrumbService: BreadcrumbService) { 
    breadcrumbService.breadcrumbData = {
      title: 'Dashbord',
      breadcrumb: [ 
        {text: 'Dashbord'}, 
      ]
    }
   }

  ngOnInit(): void {
  }

}
