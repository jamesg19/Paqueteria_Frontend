import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaCoordenadaComponent } from './mapa-coordenada.component';

describe('MapaCoordenadaComponent', () => {
  let component: MapaCoordenadaComponent;
  let fixture: ComponentFixture<MapaCoordenadaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MapaCoordenadaComponent]
    });
    fixture = TestBed.createComponent(MapaCoordenadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
