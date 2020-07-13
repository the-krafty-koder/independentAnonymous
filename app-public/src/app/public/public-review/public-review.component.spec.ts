import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicReviewComponent } from './public-review.component';

describe('PublicReviewComponent', () => {
  let component: PublicReviewComponent;
  let fixture: ComponentFixture<PublicReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
