import { TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Experience } from '@interfaces/experience.interface';

@Component({
  selector: 'portfolio-card-experience',
  imports: [TitleCasePipe],
  templateUrl: './card-experience.html',
  styleUrl: './card-experience.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardExperience {
  experience = input.required<Experience>();
}
