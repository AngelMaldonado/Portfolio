import { Component, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
    selector: 'app-link',
    imports: [RouterLink],
    templateUrl: './link.component.html',
    styleUrl: './link.component.css'
})
export class LinkComponent {
  @Input() href: string = '#';
  @Input() active: boolean = false;
  @Input() toRoute: boolean = false
  @Input() blank: boolean = false

  constructor(private router: Router) { }

  scrollTo(section: string): void {
    const element = document.querySelector(section);
    if (element) {
      element.scrollIntoView();
    }
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
