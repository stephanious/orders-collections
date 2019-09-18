import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppOrdersTableComponent } from './app-orders-table.component';

describe('AppOrdersTableComponent', () => {
  let component: AppOrdersTableComponent;
  let fixture: ComponentFixture<AppOrdersTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppOrdersTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppOrdersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
