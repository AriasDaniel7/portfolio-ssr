import { TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Experience } from '@portfolio/interfaces/experience.interface';
import { AnimateOnViewDirective } from '@shared/directives/animateOnView.directive';

@Component({
  selector: 'portfolio-card-experience',
  imports: [TitleCasePipe, AnimateOnViewDirective],
  templateUrl: './card-experience.component.html',
  styleUrl: './card-experience.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardExperienceComponent {
  experience = input.required<Experience>();
}
