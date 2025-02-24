import { Component, Input } from '@angular/core';
import User from '@models/User';
import { SvgIconComponent } from '@ngneat/svg-icon';
import { ModalMode, ModalService } from '@services/modal.service';
import { BadgeComponent } from '@shared/components/ui';

@Component({
    selector: 'app-dashboard-user-card',
    imports: [SvgIconComponent, BadgeComponent],
    templateUrl: './user-card.component.html',
    styleUrl: './user-card.component.css'
})
export class UserCardComponent {
  @Input({ required: true }) user!: User

  constructor(private modalService: ModalService) { }

  editUser() {
    this.modalService.show(this.user, ModalMode.edit);
  }

  deleteUser() {
    this.modalService.show(this.user, ModalMode.delete);
  }
}
