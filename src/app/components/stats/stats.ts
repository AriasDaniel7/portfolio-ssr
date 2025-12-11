import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'portfolio-stats',
  imports: [],
  templateUrl: './stats.html',
  styleUrl: './stats.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Stats { }
