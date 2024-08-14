import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPostsPanelComponent } from './dashboard-posts-panel.component';

describe('DashboardPostsPanelComponent', () => {
  let component: DashboardPostsPanelComponent;
  let fixture: ComponentFixture<DashboardPostsPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardPostsPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardPostsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
