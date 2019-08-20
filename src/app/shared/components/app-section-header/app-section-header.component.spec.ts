import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSectionHeaderComponent } from './app-section-header.component';

describe('AppSectionHeaderComponent', () => {
  let component: AppSectionHeaderComponent;
  let fixture: ComponentFixture<AppSectionHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppSectionHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSectionHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
