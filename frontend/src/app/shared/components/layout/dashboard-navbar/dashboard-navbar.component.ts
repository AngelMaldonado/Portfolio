import { AfterViewInit, Component, ElementRef, HostListener } from '@angular/core';
import { SvgIconComponent } from '@ngneat/svg-icon';
import { LinkComponent } from '@shared/components/ui';
import { ModalComponent } from "../../templates/modal/modal.component";
import { Router } from '@angular/router';
import { TechnologyComponent } from "../../forms/technology-form/technology-form.component";
import { ProjectFormComponent } from "../../forms/project-form/project-form.component";
import { UserFormComponent } from "../../forms/user-form/user-form.component";
import { PostFormComponent } from "../../forms/post-form/post-form.component";
import { ModalService, ModalState } from '@services/modal.service';

@Component({
    selector: 'app-dashboard-navbar',
    imports: [LinkComponent, SvgIconComponent, ModalComponent, TechnologyComponent, ProjectFormComponent, UserFormComponent, PostFormComponent],
    templateUrl: './dashboard-navbar.component.html',
    styleUrl: './dashboard-navbar.component.css'
})
export class DashboardNavbarComponent implements AfterViewInit {
  expanded: boolean = false
  modalMode: string = 'Create'

  constructor(private elementRef: ElementRef, private modalService: ModalService, protected router: Router) {
    modalService.currentState.subscribe((state: ModalState) => { this.modalMode = state.mode })
  }

  ngAfterViewInit(): void {
    const toggler = this.elementRef.nativeElement.querySelector('input[type="checkbox"]') as HTMLInputElement
    if (window.innerWidth > 992)
      toggler.tabIndex = -1
    toggler.addEventListener('change', () => this.expanded = toggler.checked);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    const toggler = this.elementRef.nativeElement.querySelector('input[type="checkbox"]') as HTMLInputElement
    if (event.target.innerWidth > 992) {
      this.expanded = false
      toggler.checked = false
      toggler.tabIndex = -1
    } else {
      toggler.tabIndex = 0
    }
  }

  getModalTitle(): string {
    switch (this.router.url) {
      case '/dashboard/technologies':
        return `${this.modalMode} tecnología`
      case '/dashboard/projects':
        return `${this.modalMode} proyecto`
      case '/dashboard/users':
        return `${this.modalMode} usuario`
      case '/dashboard/posts':
        return `${this.modalMode} post`
    }
    return '🤔'
  }
}
