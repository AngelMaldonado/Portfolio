import { Component, Input, OnInit } from '@angular/core';
import { SvgIconComponent } from '@ngneat/svg-icon';
import { ModalService } from '../../../services/modal.service';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [SvgIconComponent],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent implements OnInit {
  @Input({ required: true }) id!: string;

  constructor(protected modalService: ModalService) { }

  ngOnInit() {
    this.modalService.setId(this.id)
  }
}
