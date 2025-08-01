import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PortfolioNavComponent } from '@portfolio/components/portfolio-nav/portfolio-nav.component';
import { TextLoadingComponent } from '@shared/components/text-loading/text-loading.component';

@Component({
  selector: 'app-portfolio-layout',
  imports: [RouterOutlet, PortfolioNavComponent, TextLoadingComponent],
  templateUrl: './portfolio-layout.component.html',
  styleUrl: './portfolio-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PortfolioLayoutComponent {}
