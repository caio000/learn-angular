import { Component, OnInit } from '@angular/core';

// importando services
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomePortal: string;
  cursos: Array<string>;
  cursoCriado: string;

  constructor(private cursoService: CursosService) {}

  ngOnInit() {
      this.nomePortal = 'caio000.github.io';
      this.cursos = this.cursoService.getCursos();
      this.cursoService.emitirCursoCriado.subscribe(curso => this.cursoCriado = curso);
  }

}
