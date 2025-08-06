import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AnimateOnViewDirective } from '@shared/directives/animateOnView.directive';

@Component({
  selector: 'portfolio-card-education',
  imports: [AnimateOnViewDirective],
  templateUrl: './card-education.component.html',
  styleUrl: './card-education.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardEducationComponent {}
