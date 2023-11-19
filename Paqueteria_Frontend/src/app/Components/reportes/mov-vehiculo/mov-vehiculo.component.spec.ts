import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovVehiculoComponent } from './mov-vehiculo.component';

describe('MovVehiculoComponent', () => {
  let component: MovVehiculoComponent;
  let fixture: ComponentFixture<MovVehiculoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovVehiculoComponent]
    });
    fixture = TestBed.createComponent(MovVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
