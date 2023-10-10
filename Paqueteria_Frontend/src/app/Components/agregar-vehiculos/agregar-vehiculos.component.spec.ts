import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarVehiculosComponent } from './agregar-vehiculos.component';

describe('AgregarVehiculosComponent', () => {
  let component: AgregarVehiculosComponent;
  let fixture: ComponentFixture<AgregarVehiculosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarVehiculosComponent]
    });
    fixture = TestBed.createComponent(AgregarVehiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
