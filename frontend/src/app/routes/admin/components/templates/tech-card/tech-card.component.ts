import { Component, Input } from '@angular/core';
import Skill from '@models/Skill';
import { SvgIconComponent } from '@ngneat/svg-icon';
import { ModalMode, ModalService } from '@services/modal.service';

@Component({
  selector: 'app-dashboard-tech-card',
  imports: [SvgIconComponent],
  templateUrl: './tech-card.component.html',
  styleUrl: './tech-card.component.css'
})
export class TechCardComponent {
  @Input({ required: true }) skill!: Skill;

  constructor(private modalService: ModalService) { }

  editSkill() {
    this.modalService.show(this.skill, ModalMode.edit);
  }

  deleteSkill() {
    this.modalService.show(this.skill, ModalMode.delete);
  }
}
