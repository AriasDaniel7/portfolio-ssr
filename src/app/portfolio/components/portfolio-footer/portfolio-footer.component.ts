import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { AnimateOnViewDirective } from '@shared/directives/animateOnView.directive';

@Component({
  selector: 'portfolio-footer',
  imports: [DatePipe, AnimateOnViewDirective],
  templateUrl: './portfolio-footer.component.html',
  styleUrl: './portfolio-footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioFooterComponent {
  today = signal(new Date());
}
