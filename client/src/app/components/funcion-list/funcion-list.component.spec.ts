import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionListComponent } from './funcion-list.component';

describe('FuncionListComponent', () => {
  let component: FuncionListComponent;
  let fixture: ComponentFixture<FuncionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuncionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
