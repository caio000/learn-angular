import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-criar-curso',
  templateUrl: './criar-curso.component.html',
  styleUrls: ['./criar-curso.component.css']
})
export class CriarCursoComponent implements OnInit {

    cursos: string[];

    @ViewChild('cursoInput') cursoInput: ElementRef;

    constructor(
        private _cursosService: CursosService,
    ) {
        this.cursos = this._cursosService.getCursos();
    }

    onAddCurso(): void {
        const curso = this.cursoInput.nativeElement.value;
        this._cursosService.add(curso);
        this.cursoInput.nativeElement.value = null;
    }

    ngOnInit() {
    }

}
