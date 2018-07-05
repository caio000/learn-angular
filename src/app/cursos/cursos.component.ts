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
  private cursosService: CursosService;

  constructor(cursoService:CursosService) {
    this.nomePortal = 'caio000.github.io';
    this.cursosService = cursoService;
    this.cursos = this.cursosService.getCursos();
  }

  ngOnInit() {
  }

}
