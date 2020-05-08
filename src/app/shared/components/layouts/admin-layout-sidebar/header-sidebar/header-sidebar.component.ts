import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-sidebar',
  templateUrl: './header-sidebar.component.html',
  styleUrls: ['./header-sidebar.component.css']
})
export class HeaderSidebarComponent implements OnInit {

  notifications: any[];
  showNotification = false;

  constructor() {

    this.notifications = [
      {
        icon: 'i-Speach-Bubble-6',
        title: 'Nova Menssagem',
        badge: '3',
        text: 'Novo pedido',
        time: new Date(),
        status: 'primary',
        link: '/chat'
      },
      {
        icon: 'i-Receipt-3',
        title: 'Importação',
        badge: '12.000',
        text: 'Importação realizado com sucesso.',
        time: new Date('11/11/2018'),
        status: 'success',
        link: '/tables/full'
      },
    ];

   }

  ngOnInit(): void { }

}
