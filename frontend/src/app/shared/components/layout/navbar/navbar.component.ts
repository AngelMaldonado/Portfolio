import { AfterViewInit, Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import User from '@models/User';
import { AuthService } from '@services/auth.service';
import { LinkComponent } from '@shared/components/ui';
import { Subscription } from 'rxjs';
import { Location } from '@angular/common'; // Correct import from '@angular/common'

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [LinkComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'] // Corrected to styleUrls
})
export class NavbarComponent implements AfterViewInit, OnInit {
  expanded: boolean = false;
  loggedIn: boolean = false;
  user?: User;
  private subscription: Subscription = new Subscription();

  constructor(protected router: Router, private elementRef: ElementRef, private authService: AuthService, private location: Location) { }

  ngOnInit() {
    this.subscription.add(
      this.authService.validateSession().subscribe({
        next: _ => {
          this.loggedIn = true;
          this.user = this.authService.getUser();
        },
        error: _ => {
          this.loggedIn = false;
          this.user = undefined;
        }
      })
    );
  }

  ngAfterViewInit(): void {
    const toggler = this.elementRef.nativeElement.querySelector('input[type="checkbox"]') as HTMLInputElement;
    const navbar = this.elementRef.nativeElement.querySelector('.navbar') as HTMLElement;
    if (window.innerWidth > 992)
      toggler.tabIndex = -1;
    toggler.addEventListener('change', () => this.expanded = toggler.checked);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe(); // Clean up subscriptions
  }

  onLogout() {
    this.authService.logout().subscribe({
      next: _ => {
        // Navigate to login page or any other page after logout
        this.router.navigate(['/auth/login']);
        this.loggedIn = false;
        this.user = undefined;
      },
      error: _ => {
        // Handle error if needed
        console.error('Logout failed');
      }
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    const toggler = this.elementRef.nativeElement.querySelector('input[type="checkbox"]') as HTMLInputElement;
    if (event.target.innerWidth > 992) {
      this.expanded = false;
      toggler.checked = false;
      toggler.tabIndex = -1;
    } else {
      toggler.tabIndex = 0;
    }
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    const navbar = this.elementRef.nativeElement.querySelector('.navbar') as HTMLElement;
    if (window.scrollY > navbar.clientHeight) {
      navbar.classList.add('blur');
    } else if (window.scrollY <= navbar.clientHeight) {
      navbar.classList.remove('blur');
    }
  }

  goBack() {
    this.location.back();
  }

  onLandingPage() {
    return this.router.url.match(/^\/(#.*)?$/) ? true : false;
  }
}
