import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AnimateOnViewDirective } from '@shared/directives/animateOnView.directive';

@Component({
  selector: 'portfolio-info-start',
  imports: [AnimateOnViewDirective],
  templateUrl: './info-start.component.html',
  styleUrl: './info-start.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoStartComponent {}
