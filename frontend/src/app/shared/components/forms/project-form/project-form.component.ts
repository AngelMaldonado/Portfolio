import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Project from '@models/Project';
import { SvgIconComponent } from '@ngneat/svg-icon';
import { ModalService, ProjectsService } from '@services/index';
import { ModalMode } from '@services/modal.service';

@Component({
  selector: 'app-project-form',
  standalone: true,
  imports: [SvgIconComponent, FormsModule, DatePipe],
  templateUrl: './project-form.component.html',
  styleUrl: './project-form.component.css'
})
export class ProjectFormComponent {
  model = new Project(new Date(), new Date(), '', '', '', '')
  mode = ModalMode.create

  constructor(private projectService: ProjectsService, private modalService: ModalService) {
    this.modalService.currentState.subscribe(state => {
      this.model = state.model as Project ?? new Project(new Date(), new Date(), '', '', '', '')
      this.mode = state.mode ?? ModalMode.create
    })
  }

  parseDate(date: EventTarget | null) {
    const dateStr = (date as HTMLInputElement).value
    if (dateStr === '') return new Date()
    return new Date((date as HTMLInputElement).value);
  }

  creating() { return this.mode === ModalMode.create }

  editing() { return this.mode === ModalMode.edit }

  deleting() { return this.mode === ModalMode.delete }

  onSubmit() {
    if (this.mode == ModalMode.create)
      this.projectService.addProject(this.model)
    else if (this.mode == ModalMode.edit)
      this.projectService.setProject(this.model)
    else if (this.mode === ModalMode.delete)
      this.projectService.deleteProject(this.model._id ?? '')
    this.modalService.hide()
  }
}
