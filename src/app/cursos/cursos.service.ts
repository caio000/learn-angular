import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class CursosService {

    emitirCursoCriado = new EventEmitter<string>();

    private cursos: string[];

  constructor() {
      this.cursos = ['java', 'javascript', 'html', 'css', 'php'];
  }

  getCursos (): Array<string> {
    return this.cursos;
  }

  add(curso: string): void {
    this.cursos.push(curso);
    this.emitirCursoCriado.emit(curso);
  }
}
