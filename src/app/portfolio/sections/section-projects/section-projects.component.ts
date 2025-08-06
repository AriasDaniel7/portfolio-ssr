import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CardProjectLoadingComponent } from '@portfolio/components/card-project-loading/card-project-loading.component';
import { ListProjectsComponent } from '@portfolio/components/list-projects/list-projects.component';
import { PaginationProjectsComponent } from '@portfolio/components/pagination-projects/pagination-projects.component';
import { GithubResponse } from '@portfolio/interfaces/github-response.interface';
import { AnimateOnViewDirective } from '@shared/directives/animateOnView.directive';
import { CreateQueryResult } from '@tanstack/angular-query-experimental';

@Component({
  selector: 'portfolio-section-projects',
  imports: [
    CardProjectLoadingComponent,
    ListProjectsComponent,
    PaginationProjectsComponent,
    AnimateOnViewDirective,
  ],
  templateUrl: './section-projects.component.html',
  styleUrl: './section-projects.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionProjectsComponent {
  repositoriesQuery =
    input.required<CreateQueryResult<GithubResponse, Error>>();
}
