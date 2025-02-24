import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Post from '@models/Post';
import { SvgIconComponent } from '@ngneat/svg-icon';
import { ModalService, PostsService } from '@services/index';
import { ModalMode } from '@services/modal.service';

@Component({
    selector: 'app-post-form',
    imports: [SvgIconComponent, FormsModule],
    templateUrl: './post-form.component.html',
    styleUrl: './post-form.component.css'
})
export class PostFormComponent {
  model = new Post('', '', '', '', '')
  mode = ModalMode.create

  constructor(private postService: PostsService, private modalService: ModalService) {
    this.modalService.currentState.subscribe(state => {
      this.model = state.model as Post ?? new Post('', '', '', '', '')
      this.mode = state.mode ?? ModalMode.create
    })
  }

  creating() { return this.mode === ModalMode.create }

  editing() { return this.mode === ModalMode.edit }

  deleting() { return this.mode === ModalMode.delete }

  onSubmit() {
    this.model.slug = this.model.title.toLowerCase().replace(/ /g, '-')
    if (this.mode == ModalMode.create)
      this.postService.addPost(this.model)
    else if (this.mode == ModalMode.edit)
      this.postService.setPost(this.model)
    else if (this.mode === ModalMode.delete)
      this.postService.deletePost(this.model._id ?? '')
    this.modalService.hide()
  }
}
