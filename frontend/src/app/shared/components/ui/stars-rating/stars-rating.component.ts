import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-stars-rating',
  standalone: true,
  imports: [],
  templateUrl: './stars-rating.component.html',
  styleUrl: './stars-rating.component.css'
})
export class StarsRatingComponent {
  @Output() starsChange = new EventEmitter<number>()

  onChange($event: any) {
    switch ($event.target.id) {
      case "one":
        this.starsChange.emit(1)
        break
      case "two":
        this.starsChange.emit(2)
        break
      case "three":
        this.starsChange.emit(3)
        break
      case "four":
        this.starsChange.emit(4)
        break
      case "five":
        this.starsChange.emit(5)
        break
    }
  }
}
