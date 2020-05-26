import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarChequesComponent } from './listar-cheques.component';

describe('ListarChequesComponent', () => {
  let component: ListarChequesComponent;
  let fixture: ComponentFixture<ListarChequesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarChequesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarChequesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
