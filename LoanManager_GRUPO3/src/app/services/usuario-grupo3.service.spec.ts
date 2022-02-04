import { TestBed } from '@angular/core/testing';

import { UsuarioGRUPO3Service } from './usuario-grupo3.service';

describe('UsuarioGRUPO3Service', () => {
  let service: UsuarioGRUPO3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuarioGRUPO3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
