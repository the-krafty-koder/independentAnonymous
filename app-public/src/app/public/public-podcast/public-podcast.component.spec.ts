import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicPodcastComponent } from './public-podcast.component';

describe('PublicPodcastComponent', () => {
  let component: PublicPodcastComponent;
  let fixture: ComponentFixture<PublicPodcastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicPodcastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicPodcastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
