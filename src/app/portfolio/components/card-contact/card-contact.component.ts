import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Contact } from '@portfolio/interfaces/contact.interface';
import { AnimateOnViewDirective } from '@shared/directives/animateOnView.directive';

@Component({
  selector: 'portfolio-card-contact',
  imports: [AnimateOnViewDirective],
  templateUrl: './card-contact.component.html',
  styleUrl: './card-contact.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardContactComponent {
  contact = input.required<Contact>();
}
