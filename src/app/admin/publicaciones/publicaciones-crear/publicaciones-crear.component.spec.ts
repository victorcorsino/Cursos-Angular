import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicacionesCrearComponent } from './publicaciones-crear.component';

describe('PublicacionesCrearComponent', () => {
  let component: PublicacionesCrearComponent;
  let fixture: ComponentFixture<PublicacionesCrearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicacionesCrearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicacionesCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
