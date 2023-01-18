import { TestBed } from '@angular/core/testing';

import { UsuarioSService } from './usuario-s.service';

describe('UsuarioSService', () => {
  let service: UsuarioSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuarioSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
