import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicInterviewComponent } from './public-interview.component';

describe('PublicInterviewComponent', () => {
  let component: PublicInterviewComponent;
  let fixture: ComponentFixture<PublicInterviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicInterviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicInterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
