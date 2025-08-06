import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Skill } from '@portfolio/interfaces/skill.interface';
import { AnimateOnViewDirective } from '@shared/directives/animateOnView.directive';

@Component({
  selector: 'portfolio-card-skill',
  imports: [AnimateOnViewDirective],
  templateUrl: './card-skill.component.html',
  styleUrl: './card-skill.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardSkillComponent {
  skill = input.required<Skill>();
}
