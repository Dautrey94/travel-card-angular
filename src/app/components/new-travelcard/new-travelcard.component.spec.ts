import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTravelcardComponent } from './new-travelcard.component';

describe('NewTravelcardComponent', () => {
  let component: NewTravelcardComponent;
  let fixture: ComponentFixture<NewTravelcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTravelcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTravelcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
