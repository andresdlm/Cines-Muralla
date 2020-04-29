import { TestBed } from '@angular/core/testing';

import { DatosPeliculasService } from './datos-peliculas.service';

describe('DatosPeliculasService', () => {
  let service: DatosPeliculasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosPeliculasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
