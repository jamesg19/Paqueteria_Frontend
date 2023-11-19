import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcedenteComponent } from './excedente.component';

describe('ExcedenteComponent', () => {
  let component: ExcedenteComponent;
  let fixture: ComponentFixture<ExcedenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExcedenteComponent]
    });
    fixture = TestBed.createComponent(ExcedenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
