import { Component, Input } from '@angular/core';
import { SvgIconComponent } from '@ngneat/svg-icon';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [SvgIconComponent],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  @Input({ required: true }) id!: string;

  showDialog() {
    const dialog = document.getElementById(this.id) as HTMLDialogElement;
    dialog.showModal()
  }

  hideDialog() {
    const dialog = document.getElementById(this.id) as HTMLDialogElement;
    dialog.close()
  }
}
