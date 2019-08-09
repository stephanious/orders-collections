import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSidebarDraftComponent } from './app-sidebar-draft.component';

describe('AppSidebarDraftComponent', () => {
  let component: AppSidebarDraftComponent;
  let fixture: ComponentFixture<AppSidebarDraftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppSidebarDraftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSidebarDraftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
