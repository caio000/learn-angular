import { Component, OnInit } from '@angular/core';

import { AuthService } from './../../rotas/login/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

    public mostrarMenu: boolean;

  constructor(
      private authService: AuthService
  ) {
      this.mostrarMenu = false;
  }

  ngOnInit() {
      this.authService.mostrarMenu.subscribe(mostrarMenu => this.mostrarMenu = mostrarMenu);
  }

}
