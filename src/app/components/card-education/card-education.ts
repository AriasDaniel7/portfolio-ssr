import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'portfolio-card-education',
  imports: [],
  templateUrl: './card-education.html',
  styleUrl: './card-education.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'w-full h-full',
  },
})
export class CardEducation {}
