import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleTrackerComponent } from './circle-tracker.component';

describe('CircleTrackerComponent', () => {
  let component: CircleTrackerComponent;
  let fixture: ComponentFixture<CircleTrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircleTrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircleTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
