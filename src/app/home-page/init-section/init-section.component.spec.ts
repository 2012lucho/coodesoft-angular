import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitSectionComponent } from './init-section.component';

describe('InitSectionComponent', () => {
  let component: InitSectionComponent;
  let fixture: ComponentFixture<InitSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
