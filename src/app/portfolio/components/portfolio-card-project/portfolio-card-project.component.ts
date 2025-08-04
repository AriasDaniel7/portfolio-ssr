import { TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { GithubRepo } from '@portfolio/interfaces/github-repo.interface';
import { ImageRepoPipe } from '@portfolio/pipes/imageRepo.pipe';

@Component({
  selector: 'portfolio-card-project',
  imports: [TitleCasePipe, ImageRepoPipe],
  templateUrl: './portfolio-card-project.component.html',
  styleUrl: './portfolio-card-project.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioCardProjectComponent {
  repo = input.required<GithubRepo>();
}
