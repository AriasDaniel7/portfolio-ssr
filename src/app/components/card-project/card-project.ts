import { TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Repository } from '@interfaces/repository.interface';
import { InViewportDirective } from '@shared/directives/inViewport.directive';

@Component({
  selector: 'portfolio-card-project',
  imports: [TitleCasePipe],
  templateUrl: './card-project.html',
  styleUrl: './card-project.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'block w-full h-full',
  },
})
export class CardProject {
  repository = input.required<Repository>();
}
