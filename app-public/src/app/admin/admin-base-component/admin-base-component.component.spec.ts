import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBaseComponentComponent } from './admin-base-component.component';

describe('AdminBaseComponentComponent', () => {
  let component: AdminBaseComponentComponent;
  let fixture: ComponentFixture<AdminBaseComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminBaseComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBaseComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
