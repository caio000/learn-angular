import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-bind',
  templateUrl: './data-bind.component.html',
  styleUrls: ['./data-bind.component.css']
})
export class DataBindComponent implements OnInit {

  url:string = 'http://caio000.github.io';
  cursoAngular = true;
  valorInput;
  valorSalvo;
  isMouseOver = false;
  nome = '';
  sobrenome = '';

  pessoa: any = {
    nome:null,
    idade:null,
  };

  urlImagem: string = 'http://lorempixel.com/400/200/sports';

  getValor () : number {
    return 1;
  }
  getCurtiCurso () : boolean {
    return true;
  }

  clickMe () : void {
    alert('click');
  }

  onKeyUp (event : KeyboardEvent) : void {
    let valor = (<HTMLInputElement>event.target).value;
    this.valorInput = valor;
  }

  salvar (value:string):void {
    this.valorSalvo = value;
  }

  onMouseOverOut () : void {
    this.isMouseOver = !this.isMouseOver;
  }

  setNome (nome:string) : void {
    this.nome = nome;
  }


  constructor() { }

  ngOnInit() {
  }

}
