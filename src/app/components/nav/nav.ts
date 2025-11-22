import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { NavService } from '@services/nav.service';

@Component({
  selector: 'portfolio-nav',
  imports: [],
  templateUrl: './nav.html',
  styleUrl: './nav.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Nav {
  private navService = inject(NavService);
  itemList = signal<string[]>(['[Inicio]', '[Proyectos]', '[Experiencia]', '[Contacto]']);

  isMenuOpen = signal(false);

  toggleMenu() {
    this.isMenuOpen.update((prev) => !prev);
  }

  setActiveItem(item: string) {
    this.navService.setActiveItem(item);
    this.isMenuOpen.set(false);
  }
}
