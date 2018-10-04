import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  deletarCiclo: boolean = false;
  valorInicial = 5;

  mudarValor() : void {
    this.valorInicial++;
  }

  destruirCiclo() {
    this.deletarCiclo = true;
  }
}
