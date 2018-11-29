import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs';

import { Alunos } from './../alunos';
import { AlunosService } from './../alunos.service';

@Component({
  selector: 'app-alunos-form',
  templateUrl: './alunos-form.component.html',
  styleUrls: ['./alunos-form.component.css']
})
export class AlunosFormComponent implements OnInit, OnDestroy {

    public aluno: Alunos;
    public inscricao: Subscription;

  constructor(
      private route: ActivatedRoute,
      private alunosService: AlunosService,
  ) { }

  ngOnInit() {
      this.inscricao = this.route.params.subscribe((params: any) => {
          const id = +params['id'];
          this.aluno = this.alunosService.getAluno(id);
      });
  }

  ngOnDestroy() {
      this.inscricao.unsubscribe();
  }

}
