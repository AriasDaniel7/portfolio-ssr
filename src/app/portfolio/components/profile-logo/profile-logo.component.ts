import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AnimateOnViewDirective } from '@shared/directives/animateOnView.directive';

@Component({
  selector: 'portfolio-profile-logo',
  imports: [AnimateOnViewDirective],
  templateUrl: './profile-logo.component.html',
  styleUrl: './profile-logo.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileLogoComponent {}
