import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PodcastListenComponent } from './podcast-listen.component';

describe('PodcastListenComponent', () => {
  let component: PodcastListenComponent;
  let fixture: ComponentFixture<PodcastListenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PodcastListenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PodcastListenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
