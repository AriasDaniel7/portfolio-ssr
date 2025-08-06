import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AnimateOnViewDirective } from '@shared/directives/animateOnView.directive';

@Component({
  selector: 'portfolio-profile-description',
  imports: [AnimateOnViewDirective],
  templateUrl: './profile-description.component.html',
  styleUrl: './profile-description.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileDescriptionComponent {}
