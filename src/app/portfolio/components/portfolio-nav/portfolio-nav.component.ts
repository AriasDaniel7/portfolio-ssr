import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { PortfolioNavService } from './portfolio-nav.service';

@Component({
  selector: 'portfolio-nav',
  imports: [NgClass],
  templateUrl: './portfolio-nav.component.html',
  styleUrl: './portfolio-nav.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioNavComponent {
  portfolioNavService = inject(PortfolioNavService);

  itemList = signal<string[]>([
    '[Inicio]',
    '[Habilidades]',
    '[Proyectos]',
    '[Experiencia]',
    '[Contacto]',
  ]);

  isMenuOpen = signal(false);

  toggleMenu() {
    this.isMenuOpen.update((prev) => !prev);
  }
}
