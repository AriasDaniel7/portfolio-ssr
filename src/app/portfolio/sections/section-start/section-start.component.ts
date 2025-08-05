import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardConsoleComponent } from '@portfolio/components/card-console/card-console.component';
import { InfoStartComponent } from '@portfolio/components/info-start/info-start.component';
import { ProfileLogoComponent } from '@portfolio/components/profile-logo/profile-logo.component';
import { ProfileDescriptionComponent } from '@portfolio/components/profile-description/profile-description.component';

@Component({
  selector: 'portfolio-section-start',
  imports: [
    CardConsoleComponent,
    InfoStartComponent,
    ProfileLogoComponent,
    ProfileDescriptionComponent,
  ],
  templateUrl: './section-start.component.html',
  styleUrl: './section-start.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionStartComponent {}
