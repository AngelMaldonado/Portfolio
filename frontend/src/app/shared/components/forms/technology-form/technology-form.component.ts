import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Skill } from '@models/index';
import { SvgIconComponent } from '@ngneat/svg-icon';
import { ModalService, SkillsService } from '@services/index';
import { ModalMode } from '@services/modal.service';

@Component({
  selector: 'app-technology-form',
  standalone: true,
  imports: [SvgIconComponent, FormsModule],
  templateUrl: './technology-form.component.html',
  styleUrl: './technology-form.component.css'
})
export class TechnologyComponent {
  model = new Skill('', '')
  mode = ModalMode.create

  constructor(private skillService: SkillsService, private modalService: ModalService) {
    this.modalService.currentState.subscribe(state => {
      this.model = state.model as Skill ?? new Skill('', '')
      this.mode = state.mode ?? ModalMode.create
    })
  }

  creating() { return this.mode === ModalMode.create }

  editing() { return this.mode === ModalMode.edit }

  deleting() { return this.mode === ModalMode.delete }

  onSubmit() {
    if (this.mode == ModalMode.create)
      this.skillService.addSkill(this.model)
    else if (this.mode == ModalMode.edit)
      this.skillService.setSkill(this.model)
    else if (this.mode === ModalMode.delete)
      this.skillService.deleteSkill(this.model._id ?? '')
    this.modalService.hide()
  }
}
