import { Component, OnInit } from '@angular/core';

import { AlunosService } from './alunos.service';
import { Alunos } from './alunos';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

    public alunos: Array<Alunos>;

  constructor(
      private alunosService: AlunosService,
  ) { }

  ngOnInit() {
      this.alunos = this.alunosService.getAlunos();
  }

}
