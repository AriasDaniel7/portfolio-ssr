import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { GithubRepo } from '@portfolio/interfaces/github-repo.interface';
import { PortfolioCardProjectComponent } from '@portfolio/components/portfolio-card-project/portfolio-card-project.component';

@Component({
  selector: 'portfolio-list-project',
  imports: [PortfolioCardProjectComponent],
  templateUrl: './portfolio-list-project.component.html',
  styleUrl: './portfolio-list-project.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioListProjectComponent {
  repos = input.required<GithubRepo[]>();
}
