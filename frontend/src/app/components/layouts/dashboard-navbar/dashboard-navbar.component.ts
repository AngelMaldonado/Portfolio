import { AfterViewInit, Component, ElementRef, HostListener } from '@angular/core';
import { SvgIconComponent } from '@ngneat/svg-icon';
import { LinkComponent } from '../../atoms/link/link.component';
import { ModalComponent } from "../../templates/modal/modal.component";

@Component({
  selector: 'app-dashboard-navbar',
  standalone: true,
  imports: [LinkComponent, SvgIconComponent, ModalComponent],
  templateUrl: './dashboard-navbar.component.html',
  styleUrl: './dashboard-navbar.component.css'
})
export class DashboardNavbarComponent implements AfterViewInit {
  expanded: boolean = false

  constructor(private elementRef: ElementRef) { }

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
}
