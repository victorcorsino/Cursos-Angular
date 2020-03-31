import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicacionesListarComponent } from './publicaciones-listar.component';

describe('PublicacionesListarComponent', () => {
  let component: PublicacionesListarComponent;
  let fixture: ComponentFixture<PublicacionesListarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicacionesListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicacionesListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
});
