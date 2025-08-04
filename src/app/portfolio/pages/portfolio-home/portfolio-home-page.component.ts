import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PortfolioCardConsoleComponent } from '@portfolio/components/portfolio-card-console/portfolio-card-console.component';
import { PortfolioDescriptionComponent } from '@portfolio/components/portfolio-description/portfolio-description.component';
import { PortfolioButtonDescriptionComponent } from '@portfolio/components/portfolio-button-description/portfolio-button-description.component';
import { PortfolioUserLogoComponent } from '@portfolio/components/portfolio-user-logo/portfolio-user-logo.component';
import { PortfolioUserDescriptionComponent } from '@portfolio/components/portfolio-user-description/portfolio-user-description.component';
import { PortfolioTechStackComponent } from '@portfolio/components/portfolio-tech-stack/portfolio-tech-stack.component';
import { PortfolioHomeService } from './portfolio-home.service';

import { PortfolioService } from '@portfolio/services/portfolio.service';
import { PortfolioListProjectComponent } from '@portfolio/components/portfolio-list-project/portfolio-list-project.component';
import { PortfolioCardProjectLoadingComponent } from '@portfolio/components/portfolio-card-project-loading/portfolio-card-project-loading.component';

@Component({
  selector: 'app-portfolio-home-page',
  imports: [
    PortfolioCardConsoleComponent,
    PortfolioDescriptionComponent,
    PortfolioButtonDescriptionComponent,
    PortfolioUserLogoComponent,
    PortfolioUserDescriptionComponent,
    PortfolioTechStackComponent,
    PortfolioListProjectComponent,
    PortfolioCardProjectLoadingComponent,
  ],
  templateUrl: './portfolio-home-page.component.html',
  styleUrl: './portfolio-home-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PortfolioHomePageComponent {
  private portfolioHomeService = inject(PortfolioHomeService);
  private portfolioService = inject(PortfolioService);

  reposiroriesQuery = this.portfolioService.repositoriesQuery;

  nextPage() {
    this.portfolioService.currentPage.update((page) => page + 1);
  }

  prevPage() {
    this.portfolioService.currentPage.update((page) =>
      page > 1 ? page - 1 : 1
    );
  }
}
