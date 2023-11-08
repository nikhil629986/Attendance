import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttenDashboardComponent } from './atten-dashboard.component';

describe('AttenDashboardComponent', () => {
  let component: AttenDashboardComponent;
  let fixture: ComponentFixture<AttenDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AttenDashboardComponent]
    });
    fixture = TestBed.createComponent(AttenDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
