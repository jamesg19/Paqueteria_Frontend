import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalisisVehiculosComponent } from './analisis-vehiculos.component';

describe('AnalisisVehiculosComponent', () => {
  let component: AnalisisVehiculosComponent;
  let fixture: ComponentFixture<AnalisisVehiculosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnalisisVehiculosComponent]
    });
    fixture = TestBed.createComponent(AnalisisVehiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
