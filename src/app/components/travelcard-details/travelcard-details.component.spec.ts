import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelcardDetailsComponent } from './travelcard-details.component';

describe('TravelcardDetailsComponent', () => {
  let component: TravelcardDetailsComponent;
  let fixture: ComponentFixture<TravelcardDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelcardDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelcardDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
