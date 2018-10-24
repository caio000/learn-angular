import { TestBed, inject } from '@angular/core/testing';

import { CursosService } from './cursos.service';

describe('CursosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CursosService]
    });
  });

  it('should be created', inject([CursosService], (service: CursosService) => {
    expect(service).toBeTruthy();
  }));

  it('should be created a new course', inject([CursosService], (service: CursosService) => {
      service.add('nodejs');
      expect(service.getCursos()).toContain('nodejs');
  }));
});
