import { TestBed } from '@angular/core/testing';

import { VehiculoServicioService } from './vehiculo-servicio.service';

describe('VehiculoServicioService', () => {
  let service: VehiculoServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VehiculoServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
