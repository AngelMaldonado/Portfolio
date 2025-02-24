import { Component, Input, OnInit } from '@angular/core';
import { SvgIconComponent } from '@ngneat/svg-icon';
import { ModalService } from '@services/index';

@Component({
    selector: 'app-modal',
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
