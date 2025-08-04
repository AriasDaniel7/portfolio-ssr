import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'portfolio-nav',
  imports: [NgClass],
  templateUrl: './portfolio-nav.component.html',
  styleUrl: './portfolio-nav.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioNavComponent {
  itemList = input<string[]>(['Home', 'About', 'Projects', 'Blog', 'Contact']);
  isMenuOpen = signal(false);

  toggleMenu() {
    this.isMenuOpen.update((prev) => !prev);
  }
}
