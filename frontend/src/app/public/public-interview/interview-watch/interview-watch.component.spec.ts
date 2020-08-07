import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewWatchComponent } from './interview-watch.component';

describe('InterviewWatchComponent', () => {
  let component: InterviewWatchComponent;
  let fixture: ComponentFixture<InterviewWatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterviewWatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewWatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
