import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PodcastDisplayComponent } from './podcast-display.component';

describe('PodcastDisplayComponent', () => {
  let component: PodcastDisplayComponent;
  let fixture: ComponentFixture<PodcastDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PodcastDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PodcastDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
