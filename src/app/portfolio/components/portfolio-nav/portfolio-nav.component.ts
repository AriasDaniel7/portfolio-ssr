import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'portfolio-nav',
  imports: [NgClass],
  templateUrl: './portfolio-nav.component.html',
  styleUrl: './portfolio-nav.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioNavComponent {
  itemList = signal<string[]>(['[Inicio]', '[Skills]', '[Proyectos]', '[Experiencia]', '[Contacto]']);
  isMenuOpen = signal(false);

  toggleMenu() {
    this.isMenuOpen.update((prev) => !prev);
  }
}
