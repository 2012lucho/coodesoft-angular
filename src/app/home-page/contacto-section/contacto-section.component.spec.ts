import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoSectionComponent } from './contacto-section.component';

describe('ContactoSectionComponent', () => {
  let component: ContactoSectionComponent;
  let fixture: ComponentFixture<ContactoSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactoSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactoSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
