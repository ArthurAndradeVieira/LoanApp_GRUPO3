import { TestBed } from '@angular/core/testing';

import { EmprestimoGRUPO3Service } from './emprestimo-grupo3.service';

describe('EmprestimoGRUPO3Service', () => {
  let service: EmprestimoGRUPO3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmprestimoGRUPO3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
