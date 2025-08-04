import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { AnimateTextWritingDirective } from '@shared/directives/animateTextWriting.directive';

@Component({
  selector: 'portfolio-card-console',
  imports: [AnimateTextWritingDirective],
  templateUrl: './portfolio-card-console.component.html',
  styleUrl: './portfolio-card-console.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioCardConsoleComponent {
  listCommands = signal([
    '$ ng --version',
    '$ ng generate component hello-world',
    '$ ng serve',
  ]);
}
