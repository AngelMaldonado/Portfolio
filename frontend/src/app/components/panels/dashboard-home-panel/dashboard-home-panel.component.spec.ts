import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardHomePanelComponent } from './dashboard-home-panel.component';

describe('DashboardHomePanelComponent', () => {
  let component: DashboardHomePanelComponent;
  let fixture: ComponentFixture<DashboardHomePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardHomePanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardHomePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
