import { AfterViewInit, Component, ElementRef, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { LinkComponent } from '@shared/components/ui';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [LinkComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements AfterViewInit {
  expanded: boolean = false

  constructor(protected router: Router, private elementRef: ElementRef) { }

  ngAfterViewInit(): void {
    const toggler = this.elementRef.nativeElement.querySelector('input[type="checkbox"]') as HTMLInputElement
    const navbar = this.elementRef.nativeElement.querySelector('.navbar') as HTMLElement
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

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    const navbar = this.elementRef.nativeElement.querySelector('.navbar') as HTMLElement
    if (window.scrollY > navbar.clientHeight) {
      navbar.classList.add('blur')
    } else if (window.scrollY <= navbar.clientHeight) {
      navbar.classList.remove('blur')
    }
  }

  onLandingPage() {
    return this.router.url.match(/^\/(#.*)?$/) ? true : false;
  }
}
