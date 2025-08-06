import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AnimateOnViewDirective } from '@shared/directives/animateOnView.directive';
import { PortfolioNavService } from '../portfolio-nav/portfolio-nav.service';

@Component({
  selector: 'portfolio-info-start',
  imports: [AnimateOnViewDirective],
  templateUrl: './info-start.component.html',
  styleUrl: './info-start.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoStartComponent {
  private portfolioNavService = inject(PortfolioNavService);

  scrollToSection(sectionName: string) {
    this.portfolioNavService.setActiveItem(sectionName);
  }

  downloadCV() {
    const link = document.createElement('a');
    link.href = '/assets/documents/CV-Daniel-Arias.pdf';
    link.download = 'CV-Daniel-Arias.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
