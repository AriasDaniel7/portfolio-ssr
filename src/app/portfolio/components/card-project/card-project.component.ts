import { TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { GithubRepo } from '@portfolio/interfaces/github-repo.interface';
import { ImageRepoPipe } from '@portfolio/pipes/imageRepo.pipe';

@Component({
  selector: 'portfolio-card-project',
  imports: [TitleCasePipe, ImageRepoPipe],
  templateUrl: './card-project.component.html',
  styleUrl: './card-project.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardProjectComponent {
  repo = input.required<GithubRepo>();
}
