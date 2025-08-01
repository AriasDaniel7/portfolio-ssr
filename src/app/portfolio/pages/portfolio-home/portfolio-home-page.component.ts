import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AnimateTitleLoadingDirective } from '@portfolio/directives/animateTitleLoading.directive';

@Component({
  selector: 'app-portfolio-home-page',
  imports: [AnimateTitleLoadingDirective],
  templateUrl: './portfolio-home-page.component.html',
  styleUrl: './portfolio-home-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PortfolioHomePageComponent {}
