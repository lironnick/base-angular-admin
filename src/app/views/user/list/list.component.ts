import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { BreadcrumbService } from '../../../shared/services/breadcrumb.service';
import { UserService } from '../../../shared/services/user.service';

export interface PeriodicElement {
  id: number;
  name: string;
  login: number;
  active: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, name: 'Hydrogen', login: 1.0079, active: 'H'},
  {id: 2, name: 'Helium', login: 4.0026, active: 'He'},
  {id: 3, name: 'Lithium', login: 6.941, active: 'Li'},
  {id: 4, name: 'Beryllium', login: 9.0122, active: 'Be'},
  {id: 5, name: 'Boron', login: 10.811, active: 'B'},
  {id: 6, name: 'Carbon', login: 12.0107, active: 'C'},
  {id: 7, name: 'Nitrogen', login: 14.0067, active: 'N'},
  {id: 8, name: 'Oxygen', login: 15.9994, active: 'O'},
  {id: 9, name: 'Fluorine', login: 18.9984, active: 'F'},
  {id: 10, name: 'Neon', login: 20.1797, active: 'Ne'},
  {id: 11, name: 'Sodium', login: 22.9897, active: 'Na'},
  {id: 12, name: 'Magnesium', login: 24.305, active: 'Mg'},
  {id: 13, name: 'Aluminum', login: 26.9815, active: 'Al'},
  {id: 14, name: 'Silicon', login: 28.0855, active: 'Si'},
  {id: 15, name: 'Phosphorus', login: 30.9738, active: 'P'},
  {id: 16, name: 'Sulfur', login: 32.065, active: 'S'},
  {id: 17, name: 'Chlorine', login: 35.453, active: 'Cl'},
  {id: 18, name: 'Argon', login: 39.948, active: 'Ar'},
  {id: 19, name: 'Potassium', login: 39.0983, active: 'K'},
  {id: 20, name: 'Calcium', login: 40.078, active: 'Ca'},
];

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'login', 'active'];
  dataSource: any = [];
  pageSize = 20;
  isLoadingResults = true;
  

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    private breadcrumbService: BreadcrumbService,
    private userService: UserService
  ) { 
    breadcrumbService.breadcrumbData = {
      title: 'Usuarios',
      breadcrumb: [ 
        {text: 'Usuarios'} , 
      ]
    }
   }

  ngOnInit(): void {
    this.get();  
  }

  get() {
    this.userService.get()
    .subscribe(res => {
      console.log(res);
      const response: any = res;
      this.dataSource = new MatTableDataSource<PeriodicElement>(response);
      this.dataSource.paginator = this.paginator;
      this.isLoadingResults = false;
    }, error => {
      console.log(error);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
