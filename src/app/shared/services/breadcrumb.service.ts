import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface IBreadcrumbItem {
  text: String,
  link?: String
}

interface IBreadcrumb {
  title: String,
  breadcrumb?: Array<IBreadcrumbItem>
}

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {

  private _breadcrumb = new BehaviorSubject<IBreadcrumb>({
    title: 'Home',
    breadcrumb: []
  })

  constructor() { }

  get breadcrumbData(): IBreadcrumb {
    return this._breadcrumb.value;
  }

  set breadcrumbData(breadcrumbData: IBreadcrumb) {
    this._breadcrumb.next(breadcrumbData);
  }
}
