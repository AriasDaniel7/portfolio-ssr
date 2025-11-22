import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NavService } from '@services/nav.service';

@Component({
  selector: 'portfolio-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hero {
  private navService = inject(NavService);

  navigateTo(section: string) {
    this.navService.setActiveItem(section);
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
