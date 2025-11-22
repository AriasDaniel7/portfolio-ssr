import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { InViewportDirective } from '@shared/directives/inViewport.directive';

@Component({
  selector: 'portfolio-footer',
  imports: [DatePipe, InViewportDirective],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {
  today = signal(new Date());
}
