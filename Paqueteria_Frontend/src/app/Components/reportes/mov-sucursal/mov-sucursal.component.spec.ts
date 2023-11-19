import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovSucursalComponent } from './mov-sucursal.component';

describe('MovSucursalComponent', () => {
  let component: MovSucursalComponent;
  let fixture: ComponentFixture<MovSucursalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovSucursalComponent]
    });
    fixture = TestBed.createComponent(MovSucursalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
