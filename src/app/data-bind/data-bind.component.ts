import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-bind',
  templateUrl: './data-bind.component.html',
  styleUrls: ['./data-bind.component.css']
})
export class DataBindComponent implements OnInit {

  url = 'http://caio000.github.io';
  cursoAngular = true;
  valorInput;
  valorSalvo;
  isMouseOver = false;
  nome = '';
  sobrenome = '';

  valorInicial = 15;

  nomeDoCurso = 'Angular';

  pessoa: any = {
    nome: null,
    idade: null,
  };

  urlImagem = 'http://lorempixel.com/400/200/sports';

  getValor (): number {
    return 1;
  }
  getCurtiCurso (): boolean {
    return true;
  }

  clickMe (): void {
    alert('click');
  }

  onKeyUp (event: KeyboardEvent): void {
    const valor = (<HTMLInputElement>event.target).value;
    this.valorInput = valor;
  }

  salvar (value: string): void {
    this.valorSalvo = value;
  }

  onMouseOverOut (): void {
    this.isMouseOver = !this.isMouseOver;
  }

  setNome (nome: string): void {
    this.nome = nome;
  }

  onMudouValor(evento) {
    console.log(evento.novoValor);
  }


  constructor() { }

  ngOnInit() {
  }

}
