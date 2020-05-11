import { Component, OnInit, Input } from '@angular/core';

interface IBreadcrumbItem {
  text: String,
  link?: String
}


@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {

  breadcrumbs: any =  [];
  
  @Input() title: string;
  @Input() items: Array<IBreadcrumbItem> = [];
  
  constructor() { }

  ngOnInit(): void {
  }

  isTheLastItem(item: IBreadcrumbItem): boolean {
    const index = this.items.indexOf(item);
    return index + 1 == this.items.length;
  }

}
