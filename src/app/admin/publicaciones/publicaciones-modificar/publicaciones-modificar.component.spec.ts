import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicacionesModificarComponent } from './publicaciones-modificar.component';

describe('PublicacionesModificarComponent', () => {
  let component: PublicacionesModificarComponent;
  let fixture: ComponentFixture<PublicacionesModificarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicacionesModificarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicacionesModificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
