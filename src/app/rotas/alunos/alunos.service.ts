import { Injectable } from '@angular/core';

import { Alunos } from './alunos';

@Injectable()
export class AlunosService {

    private alunos: Array<Alunos>;

  constructor() {
      this.alunos = [
          { id: 1, name: 'aluno 01', email: 'aluno01@teste.com' },
          { id: 2, name: 'aluno 02', email: 'aluno02@teste.com' },
          { id: 3, name: 'aluno 03', email: 'aluno03@teste.com' }
      ];
  }

  public getAlunos(): Array<Alunos> {
      return this.alunos;
  }

  public getAluno(id: number): Alunos {
      return this.alunos.find((aluno: Alunos) => aluno.id === id);
  }
}
