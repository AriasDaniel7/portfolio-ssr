import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PortfolioService } from '@portfolio/services/portfolio.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { PortfolioCardConsoleComponent } from "@portfolio/components/portfolio-card-console/portfolio-card-console.component";
import { PortfolioDescriptionComponent } from "@portfolio/components/portfolio-description/portfolio-description.component";
import { PortfolioButtonDescriptionComponent } from "@portfolio/components/portfolio-button-description/portfolio-button-description.component";
import { PortfolioUserLogoComponent } from "@portfolio/components/portfolio-user-logo/portfolio-user-logo.component";
import { PortfolioUserDescriptionComponent } from "@portfolio/components/portfolio-user-description/portfolio-user-description.component";

@Component({
  selector: 'app-portfolio-home-page',
  imports: [PortfolioCardConsoleComponent, PortfolioDescriptionComponent, PortfolioButtonDescriptionComponent, PortfolioUserLogoComponent, PortfolioUserDescriptionComponent],
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
