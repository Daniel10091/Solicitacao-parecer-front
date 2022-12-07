import { TestBed } from '@angular/core/testing';

import { EnviarSolicitacoService } from './enviar-solicitaco.service';

describe('EnviarSolicitacoService', () => {
  let service: EnviarSolicitacoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnviarSolicitacoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
