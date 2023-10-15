import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditScucursalComponent } from './edit-scucursal.component';

describe('EditScucursalComponent', () => {
  let component: EditScucursalComponent;
  let fixture: ComponentFixture<EditScucursalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditScucursalComponent]
    });
    fixture = TestBed.createComponent(EditScucursalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
