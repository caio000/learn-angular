import { Injectable, EventEmitter } from '@angular/core';

import { LogService } from './../shared/log.service';

@Injectable()
export class CursosService {

    emitirCursoCriado = new EventEmitter<string>();

    private cursos: string[];

  constructor(
      private logService: LogService,
  ) {
      this.cursos = ['java', 'javascript', 'html', 'css', 'php'];
  }

  getCursos (): Array<string> {
      this.logService.consoleLog('obtendo lista de cursos');
    return this.cursos;
  }

  add(curso: string): void {
      this.logService.consoleLog(`Criado o curso ${curso}`);
    this.cursos.push(curso);
    this.emitirCursoCriado.emit(curso);
  }
}
