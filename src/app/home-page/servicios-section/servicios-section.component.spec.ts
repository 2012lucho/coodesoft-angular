import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosSectionComponent } from './servicios-section.component';

describe('ServiciosSectionComponent', () => {
  let component: ServiciosSectionComponent;
  let fixture: ComponentFixture<ServiciosSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiciosSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiciosSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
