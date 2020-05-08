import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface IMenuItem {
  id?: string;
  name?: string;      // Used as display text for item and title for separator type
  router?: string;    // Router state
  icon?: string;      // Material icon name
  tooltip?: string;   // Tooltip text
  disabled?: boolean; // If true, item will not be appeared in sidenav.
  active?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  selectedItem: IMenuItem;

  constructor() { }

  defaultMenu: IMenuItem[] = [
    {   
        name: 'Dashboard',
        icon: 'i-Bar-Chart',
        router: '',
    },
    {   
        name: 'Produtos',
        icon: 'i-Bar-Chart',
        router: '',
    },
];

// sets iconMenu as default;
menuItems = new BehaviorSubject<IMenuItem[]>(this.defaultMenu);
// navigation component has subscribed to this Observable
menuItems$ = this.menuItems.asObservable();

// You can customize this method to supply different menu for
// different user type.
// publishNavigationChange(menuType: string) {
//   switch (userType) {
//     case 'admin':
//       this.menuItems.next(this.adminMenu);
//       break;
//     case 'user':
//       this.menuItems.next(this.userMenu);
//       break;
//     default:
//       this.menuItems.next(this.defaultMenu);
//   }
// }

}
