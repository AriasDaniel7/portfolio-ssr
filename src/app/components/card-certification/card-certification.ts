import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'portfolio-card-certification',
  imports: [],
  templateUrl: './card-certification.html',
  styleUrl: './card-certification.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'w-full h-full',
  },
})
export class CardCertification {}
