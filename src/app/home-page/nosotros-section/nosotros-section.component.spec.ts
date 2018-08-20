import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NosotrosSectionComponent } from './nosotros-section.component';

describe('NosotrosSectionComponent', () => {
  let component: NosotrosSectionComponent;
  let fixture: ComponentFixture<NosotrosSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NosotrosSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NosotrosSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
