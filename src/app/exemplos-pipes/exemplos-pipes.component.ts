import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {


livro: any = {
    titulo: 'um titulo bem bacana',
    nota: 4.54321,
    numeroPaginas: 314,
    preco: 44.99,
    dataLancamento: new Date(2016, 5, 23),
    url: 'http://umaurlqualquer.com',
};

livros: string [] = [
    'angular',
    'java'
];

filtro: string;

  constructor() { }

  ngOnInit() {
  }

  addCurso(livro: string): void {
      this.livros.push(livro);
  }

}
