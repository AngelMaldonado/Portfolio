import { Component, OnInit } from '@angular/core';
import { SvgIconComponent } from '@ngneat/svg-icon';
import User from '../../../models/User';
import { UsersService } from '../../../services/users.service';
import { ModalMode, ModalService } from '../../../services/modal.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [SvgIconComponent, FormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {
  model = new User('', '')
  mode = ModalMode.create

  constructor(private userService: UsersService, private modalService: ModalService) {
    this.modalService.currentState.subscribe(state => {
      this.model = state.model as User ?? new User('', '')
      this.mode = state.mode ?? ModalMode.create
    })
  }

  creating() { return this.mode === ModalMode.create }

  editing() { return this.mode === ModalMode.edit }

  deleting() { return this.mode === ModalMode.delete }

  onSubmit() {
    if (this.mode == ModalMode.create)
      this.userService.addUser(this.model)
    else if (this.mode == ModalMode.edit)
      this.userService.setUser(this.model)
    else if (this.mode === ModalMode.delete)
      this.userService.deleteUser(this.model._id ?? '')
    this.modalService.hide()
  }
}
