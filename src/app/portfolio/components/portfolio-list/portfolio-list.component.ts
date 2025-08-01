import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { PortfolioCardComponent } from '../portfolio-card/portfolio-card.component';
import { GithubRepo } from '@portfolio/interfaces/github-repo.interface';

@Component({
  selector: 'portfolio-list',
  imports: [PortfolioCardComponent],
  templateUrl: './portfolio-list.component.html',
  styleUrl: './portfolio-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioListComponent {
  repositories = input.required<GithubRepo[]>();
}
