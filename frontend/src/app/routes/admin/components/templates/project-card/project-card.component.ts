import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import Project from '@models/Project';
import { SvgIconComponent } from '@ngneat/svg-icon';
import { ModalMode, ModalService } from '@services/modal.service';
import { LinkComponent } from '@shared/components/ui';

@Component({
  selector: 'app-dashboard-project-card',
  standalone: true,
  imports: [SvgIconComponent, LinkComponent, DatePipe],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {
  @Input({ required: true }) project!: Project

  constructor(private modalService: ModalService) { }

  editProject() {
    this.modalService.show(this.project, ModalMode.edit);
  }

  deleteProject() {
    this.modalService.show(this.project, ModalMode.delete);
  }
}
