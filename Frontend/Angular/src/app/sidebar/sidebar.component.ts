import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/welcome', title: 'Welcome',  icon: 'pe-7s-graph', class: '' },
    { path: '/user', title: 'User Profile',  icon:'pe-7s-user', class: '' },
    { path: '/mining', title: 'Mining',  icon:'pe-7s-axe', class: '' },
    { path: '/block', title: 'Block',  icon:'pe-7s-note2', class: '' },
    { path: '/wallet', title: 'Wallet',  icon:'pe-7s-piggy', class: '' },
    { path: '/utils', title: 'Utilities',  icon:'pe-7s-tools', class: '' },
    { path: '/control', title: 'Control',  icon:'pe-7s-plugin', class: '' },
   
   
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
