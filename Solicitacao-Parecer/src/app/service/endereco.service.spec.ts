import { TestBed } from '@angular/core/testing';

import { EnderecoService } from './endereco-service.service';

describe('EnderecoServiceService', () => {
  let service: EnderecoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnderecoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
