import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCambioDocComponent } from './listar-cambio-doc.component';

describe('ListarCambioDocComponent', () => {
  let component: ListarCambioDocComponent;
  let fixture: ComponentFixture<ListarCambioDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarCambioDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarCambioDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
