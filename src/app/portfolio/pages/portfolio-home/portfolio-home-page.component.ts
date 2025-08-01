import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PortfolioService } from '@portfolio/services/portfolio.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { PortfolioListComponent } from '@portfolio/components/portfolio-list/portfolio-list.component';

@Component({
  selector: 'app-portfolio-home-page',
  imports: [PortfolioListComponent],
  templateUrl: './portfolio-home-page.component.html',
  styleUrl: './portfolio-home-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PortfolioHomePageComponent {
  private portfolioService = inject(PortfolioService);

  repositories = toSignal(this.portfolioService.getRepositories());

  get repo1() {
    return this.repositories()?.[3];
  }
}
