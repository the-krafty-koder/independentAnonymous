import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDisplayInterviewComponent } from './admin-display-interview.component';

describe('AdminDisplayInterviewComponent', () => {
  let component: AdminDisplayInterviewComponent;
  let fixture: ComponentFixture<AdminDisplayInterviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDisplayInterviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDisplayInterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
