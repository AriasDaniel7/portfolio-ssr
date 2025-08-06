import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { AnimateOnViewDirective } from '@shared/directives/animateOnView.directive';
import { CardContactComponent } from '@portfolio/components/card-contact/card-contact.component';
import { Contact } from '@portfolio/interfaces/contact.interface';

@Component({
  selector: 'portfolio-section-contact',
  imports: [AnimateOnViewDirective, CardContactComponent],
  templateUrl: './section-contact.component.html',
  styleUrl: './section-contact.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionContactComponent {
  contacts = signal<Contact[]>([
    {
      name: 'Email',
      link: 'mailto:daniel7arias2003@gmail.com',
      description: 'Respuesta en 24h',
      icon: 'email',
      abreviation: 'daniel7arias2003@gmail.com',
      class: 'from-violet-500 to-purple-600',
    },
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/daniel-arias-monroy',
      description: 'Conexión profesional',
      icon: 'linkedin',
      abreviation: 'daniel-arias-monroy',
      class: 'from-pink-500 to-rose-600',
    },
    {
      name: 'GitHub',
      link: 'https://github.com/AriasDaniel7',
      description: 'Código abierto',
      icon: 'github',
      abreviation: 'AriasDaniel7',
      class: 'from-cyan-500 to-blue-600',
    },
  ]);
}
