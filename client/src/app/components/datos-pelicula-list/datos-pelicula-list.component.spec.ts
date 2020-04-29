import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosPeliculaListComponent } from './datos-pelicula-list.component';

describe('DatosPeliculaListComponent', () => {
  let component: DatosPeliculaListComponent;
  let fixture: ComponentFixture<DatosPeliculaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosPeliculaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosPeliculaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
