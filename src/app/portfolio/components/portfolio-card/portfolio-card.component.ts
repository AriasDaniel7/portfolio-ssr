import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { GithubRepo } from '@portfolio/interfaces/github-repo.interface';
import { ImageRepoPipe } from '@portfolio/pipes/imageRepo.pipe';

@Component({
  selector: 'portfolio-card',
  imports: [ImageRepoPipe],
  templateUrl: './portfolio-card.component.html',
  styleUrl: './portfolio-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioCardComponent {
  repository = input.required<GithubRepo>();
}
