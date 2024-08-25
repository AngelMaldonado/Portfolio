import { Component, Input, OnInit } from '@angular/core';
import { SvgIconComponent } from '@ngneat/svg-icon';
import { BadgeComponent } from "../../atoms/badge/badge.component";
import User from '../../../models/User';
import { ModalMode, ModalService } from '../../../services/modal.service';

@Component({
  selector: 'app-dashboard-user-card',
  standalone: true,
  imports: [SvgIconComponent, BadgeComponent],
  templateUrl: './dashboard-user-card.component.html',
  styleUrl: './dashboard-user-card.component.css'
})
export class DashboardUserCardComponent {
  @Input({ required: true }) user!: User

  constructor(private modalService: ModalService) { }

  editUser() {
    this.modalService.show(this.user, ModalMode.edit);
  }

  deleteUser() {
    this.modalService.show(this.user, ModalMode.delete);
  }
}
