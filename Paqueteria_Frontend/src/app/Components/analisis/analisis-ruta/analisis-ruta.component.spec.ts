import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalisisRutaComponent } from './analisis-ruta.component';

describe('AnalisisRutaComponent', () => {
  let component: AnalisisRutaComponent;
  let fixture: ComponentFixture<AnalisisRutaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnalisisRutaComponent]
    });
    fixture = TestBed.createComponent(AnalisisRutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
