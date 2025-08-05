import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { AnimateTextWritingDirective } from '@shared/directives/animateTextWriting.directive';

@Component({
  selector: 'portfolio-card-console',
  imports: [AnimateTextWritingDirective],
  templateUrl: './card-console.component.html',
  styleUrl: './card-console.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardConsoleComponent {
  listCommands = signal([
    '> Daniel David Arias Monroy',
    '> Angular CLI: +17.0.0',
    '> feat: JWT authentication implemented',
    '$ cat experience.txt',
    '$ whoami',
    '> 2+ años como Full Stack Developer',
    '> NestJS + JWT + Passport',
    '$ git commit -m "feat: add auth guards"',
    '$ nest generate decorator auth',
    '$ npm run start:dev',
    '$ docker-compose up -d',
    '$ npm run build --prod',
  ]);
}
