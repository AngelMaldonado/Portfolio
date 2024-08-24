import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SvgIconComponent } from '@ngneat/svg-icon';
import Skill from '../../../models/Skill';
import { ModalComponent } from "../modal/modal.component";
import { ModalMode, ModalService } from '../../../services/modal.service';

@Component({
  selector: 'app-dashboard-tech-card',
  standalone: true,
  imports: [SvgIconComponent, ModalComponent],
  templateUrl: './dashboard-tech-card.component.html',
  styleUrl: './dashboard-tech-card.component.css'
})
export class DashboardTechCardComponent {
  @Input({ required: true }) skill!: Skill;
  @Output() submitted = new EventEmitter<void>()

  constructor(private modalService: ModalService) { }

  editSkill() {
    this.modalService.show(this.skill, ModalMode.edit, 'navbarDialog');
  }

  deleteSkill() {
    this.modalService.show(this.skill, ModalMode.delete, 'navbarDialog');
  }
}
