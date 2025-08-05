import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { GithubRepo } from '@portfolio/interfaces/github-repo.interface';
import { CardProjectComponent } from '../card-project/card-project.component';

@Component({
  selector: 'portfolio-list-projects',
  imports: [CardProjectComponent],
  templateUrl: './list-projects.component.html',
  styleUrl: './list-projects.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListProjectsComponent {
  repos = input.required<GithubRepo[]>();
}
