import { AfterViewInit, Component, ElementRef, HostListener, Input } from '@angular/core';
import Skill from '@models/Skill';

@Component({
  selector: 'app-landing-tech-card',
  standalone: true,
  imports: [],
  templateUrl: './tech-card.component.html',
  styleUrl: './tech-card.component.css'
})
export class LandingTechCardComponent implements AfterViewInit {
  @Input({ required: true }) tech!: Skill;

  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit(): void {
    const card = this.elementRef.nativeElement as HTMLElement
    card.addEventListener('mousemove', (event: MouseEvent) => {
      const x = event.clientX - card.getBoundingClientRect().left;
      const y = event.clientY - card.getBoundingClientRect().top;

      // Find the middle of the card
      const middleX = card.offsetWidth / 2;
      const middleY = card.offsetHeight / 2;

      // Calculate the offset from the middle
      const offsetX = (x - middleX) / middleX;
      const offsetY = (y - middleY) / middleY;

      // Apply the 3D transform effect
      const rotateX = offsetY * -20; // Adjust the multiplier to control tilt intensity
      const rotateY = offsetX * 20; // Negative to ensure correct rotation direction

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    })

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    });
  }
}
