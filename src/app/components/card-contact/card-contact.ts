import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Contact } from '@interfaces/contact.interface';

@Component({
  selector: 'portfolio-card-contact',
  imports: [],
  templateUrl: './card-contact.html',
  styleUrl: './card-contact.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardContact {
  contact = input.required<Contact>();
}
