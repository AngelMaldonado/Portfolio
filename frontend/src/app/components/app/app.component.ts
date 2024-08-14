import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../layouts/navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { fromEvent, throttleTime } from 'rxjs';
import { DashboardNavbarComponent } from '../layouts/dashboard-navbar/dashboard-navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, DashboardNavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angel-maldonado';

  constructor(protected router: Router) {
    fromEvent(window, 'scroll')
      .pipe(throttleTime(100))
      .subscribe((event) => this.onWindowScroll(event))
  }

  onWindowScroll(event: Event) {
    let scrollPosition = window.scrollY || document.documentElement.scrollTop
    scrollPosition += 72
    const sections = document.querySelectorAll('section')
    const navlinks: NodeListOf<HTMLAnchorElement> = document.querySelectorAll('.link')
    sections.forEach((section: HTMLElement) => {
      if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
        navlinks.forEach((navlink: HTMLAnchorElement) => {
          if (section.hasAttribute('id') && navlink.href.includes(section.id)) {
            navlink.classList.add('active')
          } else {
            navlink.classList.remove('active')
          }
        })
      }
    })
  }
}
