import { TestBed } from '@angular/core/testing';

import { ItemGRUPO3Service } from './item-grupo3.service';

describe('ItemGRUPO3Service', () => {
  let service: ItemGRUPO3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemGRUPO3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
