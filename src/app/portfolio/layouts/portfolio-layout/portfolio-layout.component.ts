import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PortfolioNavComponent } from '@portfolio/components/portfolio-nav/portfolio-nav.component';

@Component({
  selector: 'app-portfolio-layout',
  imports: [RouterOutlet, PortfolioNavComponent],
  templateUrl: './portfolio-layout.component.html',
  styleUrl: './portfolio-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PortfolioLayoutComponent {}
