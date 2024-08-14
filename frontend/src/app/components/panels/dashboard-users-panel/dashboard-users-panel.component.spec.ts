import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardUsersPanelComponent } from './dashboard-users-panel.component';

describe('DashboardUsersPanelComponent', () => {
  let component: DashboardUsersPanelComponent;
  let fixture: ComponentFixture<DashboardUsersPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardUsersPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardUsersPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
