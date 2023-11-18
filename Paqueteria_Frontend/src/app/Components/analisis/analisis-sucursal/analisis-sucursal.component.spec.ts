import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalisisSucursalComponent } from './analisis-sucursal.component';

describe('AnalisisSucursalComponent', () => {
  let component: AnalisisSucursalComponent;
  let fixture: ComponentFixture<AnalisisSucursalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnalisisSucursalComponent]
    });
    fixture = TestBed.createComponent(AnalisisSucursalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
