import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ListSkillsComponent } from '@portfolio/components/list-skills/list-skills.component';

@Component({
  selector: 'portfolio-section-skills',
  imports: [ListSkillsComponent],
  templateUrl: './section-skills.component.html',
  styleUrl: './section-skills.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionSkillsComponent {}
