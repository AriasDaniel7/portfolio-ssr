import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ListSkillsComponent } from '@portfolio/components/list-skills/list-skills.component';
import { AnimateOnViewDirective } from '@shared/directives/animateOnView.directive';

@Component({
  selector: 'portfolio-section-skills',
  imports: [ListSkillsComponent, AnimateOnViewDirective],
  templateUrl: './section-skills.component.html',
  styleUrl: './section-skills.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionSkillsComponent {}
