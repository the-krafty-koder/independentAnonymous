import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewDisplayComponent } from './interview-display.component';

describe('InterviewDisplayComponent', () => {
  let component: InterviewDisplayComponent;
  let fixture: ComponentFixture<InterviewDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterviewDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
