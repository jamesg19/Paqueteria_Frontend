import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioModalComponent } from './usuarioModal.component';

describe('ModalComponent', () => {
  let component: UsuarioModalComponent;
  let fixture: ComponentFixture<UsuarioModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsuarioModalComponent]
    });
    fixture = TestBed.createComponent(UsuarioModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
