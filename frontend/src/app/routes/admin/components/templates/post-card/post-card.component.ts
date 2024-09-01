import { Component, Input } from '@angular/core';
import Post from '@models/Post';
import { SvgIconComponent } from '@ngneat/svg-icon';
import { ModalMode, ModalService } from '@services/modal.service';
import { BadgeComponent, LinkComponent } from '@shared/components/ui';

@Component({
  selector: 'app-dashboard-post-card',
  standalone: true,
  imports: [LinkComponent, BadgeComponent, SvgIconComponent],
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.css'
})
export class PostCardComponent {
  @Input({ required: true }) post!: Post

  constructor(private modalService: ModalService) { }

  editPost() {
    this.modalService.show(this.post, ModalMode.edit);
  }

  deletePost() {
    this.modalService.show(this.post, ModalMode.delete);
  }
}
