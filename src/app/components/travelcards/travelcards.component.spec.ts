import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelcardsComponent } from './travelcards.component';

describe('TravelcardsComponent', () => {
  let component: TravelcardsComponent;
  let fixture: ComponentFixture<TravelcardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelcardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
