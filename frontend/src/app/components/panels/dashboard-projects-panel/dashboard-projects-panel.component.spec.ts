import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardProjectsPanelComponent } from './dashboard-projects-panel.component';

describe('DashboardProjectsPanelComponent', () => {
  let component: DashboardProjectsPanelComponent;
  let fixture: ComponentFixture<DashboardProjectsPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardProjectsPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardProjectsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
