import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppRightSidebarComponent } from './app-right-sidebar.component';

describe('AppRightSidebarComponent', () => {
  let component: AppRightSidebarComponent;
  let fixture: ComponentFixture<AppRightSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppRightSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppRightSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
