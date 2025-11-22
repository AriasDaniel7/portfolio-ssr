import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { AnimateTextWritingDirective } from '@shared/directives/animateTextWriting.directive';

@Component({
  selector: 'portfolio-console',
  imports: [AnimateTextWritingDirective],
  templateUrl: './console.html',
  styleUrl: './console.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Console {
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
