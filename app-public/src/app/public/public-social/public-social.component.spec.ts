import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicSocialComponent } from './public-social.component';

describe('PublicSocialComponent', () => {
  let component: PublicSocialComponent;
  let fixture: ComponentFixture<PublicSocialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicSocialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
