import { isPlatformBrowser } from '@angular/common';
import { computed, inject, Injectable, PLATFORM_ID, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NavService {
  private _activeItem = signal<string>('');
  private platformId = inject(PLATFORM_ID);

  activeItem = computed(this._activeItem);

  setActiveItem(item: string) {
    const cleanItem = item.replace(/[\[\]]/g, '').trim();
    this._activeItem.set(cleanItem);
    this.scrollToSection(cleanItem);
  }

  private scrollToSection(sectionName: string) {
    if (!isPlatformBrowser(this.platformId)) return;

    let elementId = '';

    switch (sectionName) {
      case 'Inicio':
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      case 'Proyectos':
        elementId = 'Proyectos';
        break;
      case 'Experiencia':
        elementId = 'Experiencia';
        break;
      case 'Contacto':
        elementId = 'Contacto';
        break;
    }

    if (elementId) {
      const element = document.getElementById(elementId);

      if (element) {
        const headerOffset = 73;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }
  }
}
