import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ListExperiencesComponent } from '@portfolio/components/list-experiences/list-experiences.component';
import { AnimateOnViewDirective } from '@shared/directives/animateOnView.directive';
import { CardEducationComponent } from '@portfolio/components/card-education/card-education.component';
import { CardCertificationComponent } from '@portfolio/components/card-certification/card-certification.component';

@Component({
  selector: 'portfolio-section-experience',
  imports: [
    ListExperiencesComponent,
    AnimateOnViewDirective,
    CardEducationComponent,
    CardCertificationComponent,
  ],
  templateUrl: './section-experience.component.html',
  styleUrl: './section-experience.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionExperienceComponent {}
