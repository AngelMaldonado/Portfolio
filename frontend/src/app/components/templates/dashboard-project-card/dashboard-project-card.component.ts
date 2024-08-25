import { Component, Input } from '@angular/core';
import { SvgIconComponent } from '@ngneat/svg-icon';
import { LinkComponent } from '../../atoms/link/link.component';
import Project from '../../../models/Project';
import { ModalMode, ModalService } from '../../../services/modal.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-dashboard-project-card',
  standalone: true,
  imports: [SvgIconComponent, LinkComponent, DatePipe],
  templateUrl: './dashboard-project-card.component.html',
  styleUrl: './dashboard-project-card.component.css'
})
export class DashboardProjectCardComponent {
  @Input({ required: true }) project!: Project

  constructor(private modalService: ModalService) { }

  editProject() {
    this.modalService.show(this.project, ModalMode.edit);
  }

  deleteProject() {
    this.modalService.show(this.project, ModalMode.delete);
  }
}
