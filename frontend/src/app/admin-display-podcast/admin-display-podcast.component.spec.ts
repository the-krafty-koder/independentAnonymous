import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDisplayPodcastComponent } from './admin-display-podcast.component';

describe('AdminDisplayPodcastComponent', () => {
  let component: AdminDisplayPodcastComponent;
  let fixture: ComponentFixture<AdminDisplayPodcastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDisplayPodcastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDisplayPodcastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
