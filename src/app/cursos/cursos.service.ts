import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {

    private cursos: string[];

  constructor() {
      this.cursos = ['java', 'javascript', 'html', 'css', 'php'];
  }

  getCursos (): Array<string> {
    return this.cursos;
  }

  add(curso: string): void {
    this.cursos.push(curso);
  }
}
