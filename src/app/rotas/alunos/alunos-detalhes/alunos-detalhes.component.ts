import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subscription } from 'rxjs';

import { Alunos } from './../alunos';
import { AlunosService } from './../alunos.service';

@Component({
  selector: 'app-alunos-detalhes',
  templateUrl: './alunos-detalhes.component.html',
  styleUrls: ['./alunos-detalhes.component.css']
})
export class AlunosDetalhesComponent implements OnInit, OnDestroy {

    public alunoInscricao: Subscription;
    public aluno: Alunos;

  constructor(
      private route: ActivatedRoute,
      private alunoService: AlunosService,
      private router: Router,
  ) { }

  ngOnInit() {
      this.alunoInscricao = this.route.params.subscribe((params: any) => {
          const id = params['id'];
          this.aluno = this.alunoService.getAluno(+id);
          console.log(this.aluno);
      });
  }

  ngOnDestroy() {
      this.alunoInscricao.unsubscribe();
  }


  editarContato() {
      this.router.navigate(['/alunos', this.aluno.id, 'editar']);
  }

}
