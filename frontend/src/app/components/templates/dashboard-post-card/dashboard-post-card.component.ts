import { Component, Input } from '@angular/core';
import { LinkComponent } from "../../atoms/link/link.component";
import { BadgeComponent } from "../../atoms/badge/badge.component";
import { SvgIconComponent } from '@ngneat/svg-icon';
import Post from '../../../models/Post';
import { ModalMode, ModalService } from '../../../services/modal.service';

@Component({
  selector: 'app-dashboard-post-card',
  standalone: true,
  imports: [LinkComponent, BadgeComponent, SvgIconComponent],
  templateUrl: './dashboard-post-card.component.html',
  styleUrl: './dashboard-post-card.component.css'
})
export class DashboardPostCardComponent {
  @Input({ required: true }) post!: Post

  constructor(private modalService: ModalService) { }

  editPost() {
    this.modalService.show(this.post, ModalMode.edit);
  }

  deletePost() {
    this.modalService.show(this.post, ModalMode.delete);
  }
}
