import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AnimateOnViewDirective } from '@shared/directives/animateOnView.directive';

@Component({
  selector: 'portfolio-card-certification',
  imports: [AnimateOnViewDirective],
  templateUrl: './card-certification.component.html',
  styleUrl: './card-certification.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardCertificationComponent { }
