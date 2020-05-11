import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '../../../shared/services/breadcrumb.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private breadcrumbService: BreadcrumbService) { 
    breadcrumbService.breadcrumbData = {
      title: 'Usuarios',
      breadcrumb: [ 
        {text: 'Usuarios'} , 
      ]
    }
   }

  ngOnInit(): void {
  }

}
