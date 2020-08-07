import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminArticleDisplayComponent } from './admin-article-display.component';

describe('AdminArticleDisplayComponent', () => {
  let component: AdminArticleDisplayComponent;
  let fixture: ComponentFixture<AdminArticleDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminArticleDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminArticleDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
