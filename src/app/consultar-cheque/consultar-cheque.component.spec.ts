import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarChequeComponent } from './consultar-cheque.component';

describe('ConsultarChequeComponent', () => {
  let component: ConsultarChequeComponent;
  let fixture: ComponentFixture<ConsultarChequeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultarChequeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarChequeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
