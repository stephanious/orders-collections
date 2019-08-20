import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSidebarPendingDraftComponent } from './app-sidebar-pending-draft.component';

describe('AppSidebarPendingDraftComponent', () => {
  let component: AppSidebarPendingDraftComponent;
  let fixture: ComponentFixture<AppSidebarPendingDraftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppSidebarPendingDraftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSidebarPendingDraftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
