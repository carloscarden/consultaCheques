import { TestBed } from '@angular/core/testing';

import { ConsultaChequeService } from './consulta-cheque.service';

describe('ConsultaChequeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConsultaChequeService = TestBed.get(ConsultaChequeService);
    expect(service).toBeTruthy();
  });
});
