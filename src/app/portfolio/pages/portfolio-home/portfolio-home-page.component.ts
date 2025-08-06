import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PortfolioHomeService } from './portfolio-home.service';

import { PortfolioService } from '@portfolio/services/portfolio.service';
import { SectionStartComponent } from '@portfolio/sections/section-start/section-start.component';
import { SectionSkillsComponent } from '@portfolio/sections/section-skills/section-skills.component';
import { SectionProjectsComponent } from '@portfolio/sections/section-projects/section-projects.component';
import { SectionExperienceComponent } from "@portfolio/sections/section-experience/section-experience.component";

@Component({
  selector: 'app-portfolio-home-page',
  imports: [
    SectionStartComponent,
    SectionSkillsComponent,
    SectionProjectsComponent,
    SectionExperienceComponent
],
  templateUrl: './portfolio-home-page.component.html',
  styleUrl: './portfolio-home-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PortfolioHomePageComponent {
  private portfolioHomeService = inject(PortfolioHomeService);
  private portfolioService = inject(PortfolioService);

  reposiroriesQuery = this.portfolioService.repositoriesQuery;
}
