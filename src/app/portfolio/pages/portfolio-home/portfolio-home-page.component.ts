import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  inject,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { PortfolioCardConsoleComponent } from '@portfolio/components/portfolio-card-console/portfolio-card-console.component';
import { PortfolioDescriptionComponent } from '@portfolio/components/portfolio-description/portfolio-description.component';
import { PortfolioButtonDescriptionComponent } from '@portfolio/components/portfolio-button-description/portfolio-button-description.component';
import { PortfolioUserLogoComponent } from '@portfolio/components/portfolio-user-logo/portfolio-user-logo.component';
import { PortfolioUserDescriptionComponent } from '@portfolio/components/portfolio-user-description/portfolio-user-description.component';
import { PortfolioTechStackComponent } from '@portfolio/components/portfolio-tech-stack/portfolio-tech-stack.component';
import { PortfolioHomeService } from './portfolio-home.service';
import { isPlatformBrowser, JsonPipe } from '@angular/common';
import { PortfolioNavService } from '@portfolio/components/portfolio-nav/portfolio-nav.service';

import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-portfolio-home-page',
  imports: [
    PortfolioCardConsoleComponent,
    PortfolioDescriptionComponent,
    PortfolioButtonDescriptionComponent,
    PortfolioUserLogoComponent,
    PortfolioUserDescriptionComponent,
    PortfolioTechStackComponent,
    JsonPipe,
  ],
  templateUrl: './portfolio-home-page.component.html',
  styleUrl: './portfolio-home-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PortfolioHomePageComponent implements OnInit {
  private portfolioHomeService = inject(PortfolioHomeService);
  private portfolioNavService = inject(PortfolioNavService);
  private platformId = inject(PLATFORM_ID);

  activeItem = this.portfolioNavService.activeItem;

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.portfolioNavService.setActiveItem('Inicio');
    }
  }
}
