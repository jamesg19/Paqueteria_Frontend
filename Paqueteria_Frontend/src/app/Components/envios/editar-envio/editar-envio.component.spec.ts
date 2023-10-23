import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarEnvioComponent } from './editar-envio.component';

describe('ListarComponent', () => {
  let component: EditarEnvioComponent;
  let fixture: ComponentFixture<EditarEnvioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarEnvioComponent]
    });
    fixture = TestBed.createComponent(EditarEnvioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
