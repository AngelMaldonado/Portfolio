import { AfterViewInit, Component, ElementRef, Input } from '@angular/core';
import Skill from '@models/Skill';

@Component({
    selector: 'app-landing-tech-card',
    imports: [],
    templateUrl: './tech-card.component.html',
    styleUrl: './tech-card.component.css'
})
export class LandingTechCardComponent implements AfterViewInit {
  @Input({ required: true }) tech!: Skill;

  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit(): void {
    const card = this.elementRef.nativeElement as HTMLElement
    let currentRotateX = 0;
    let currentRotateY = 0;
    const dampingFactor = 0.1; // Controls how smooth the rotation is

    card.addEventListener('mousemove', (event: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      // Find the middle of the card
      const middleX = card.offsetWidth / 2;
      const middleY = card.offsetHeight / 2;

      // Calculate the offset from the middle and normalize (-1 to 1)
      const offsetX = (x - middleX) / middleX;
      const offsetY = (y - middleY) / middleY;

      // Limit rotation values
      const maxRotate = 20; // Maximum allowed rotation
      const targetRotateX = Math.max(-maxRotate, Math.min(maxRotate, offsetY * -maxRotate));
      const targetRotateY = Math.max(-maxRotate, Math.min(maxRotate, offsetX * maxRotate));

      // Smoothly interpolate towards the target rotation
      currentRotateX += (targetRotateX - currentRotateX) * dampingFactor;
      currentRotateY += (targetRotateY - currentRotateY) * dampingFactor;

      card.style.transform = `perspective(1000px) rotateX(${currentRotateX}deg) rotateY(${currentRotateY}deg)`;
    });

    card.addEventListener('mouseleave', () => {
      // Gradually reset rotation when the mouse leaves the card
      const resetInterval = setInterval(() => {
        currentRotateX += (0 - currentRotateX) * dampingFactor;
        currentRotateY += (0 - currentRotateY) * dampingFactor;

        card.style.transform = `perspective(1000px) rotateX(${currentRotateX}deg) rotateY(${currentRotateY}deg)`;

        if (Math.abs(currentRotateX) < 0.1 && Math.abs(currentRotateY) < 0.1) {
          clearInterval(resetInterval);
          card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        }
      }, 16); // Run at roughly 60fps
    });
  }
}
