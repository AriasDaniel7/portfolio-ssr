import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
} from '@angular/core';
import { Pagination } from '@portfolio/interfaces/github-response.interface';
import { PortfolioService } from '@portfolio/services/portfolio.service';

@Component({
  selector: 'portfolio-pagination-projects',
  imports: [],
  templateUrl: './pagination-projects.component.html',
  styleUrl: './pagination-projects.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationProjectsComponent {
  private portfolioService = inject(PortfolioService);

  get hasPrev() {
    return this.portfolioService.hasPrev;
  }

  get hasNext() {
    return this.portfolioService.hasNext;
  }

  nextPage() {
    this.portfolioService.currentPage.update((page) => page + 1);
  }

  prevPage() {
    this.portfolioService.currentPage.update((page) =>
      page > 1 ? page - 1 : 1
    );
  }
}
