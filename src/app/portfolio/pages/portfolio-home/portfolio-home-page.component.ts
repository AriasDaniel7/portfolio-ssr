import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { PortfolioCardConsoleComponent } from '@portfolio/components/portfolio-card-console/portfolio-card-console.component';
import { PortfolioDescriptionComponent } from '@portfolio/components/portfolio-description/portfolio-description.component';
import { PortfolioButtonDescriptionComponent } from '@portfolio/components/portfolio-button-description/portfolio-button-description.component';
import { PortfolioUserLogoComponent } from '@portfolio/components/portfolio-user-logo/portfolio-user-logo.component';
import { PortfolioUserDescriptionComponent } from '@portfolio/components/portfolio-user-description/portfolio-user-description.component';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-portfolio-home-page',
  imports: [
    PortfolioCardConsoleComponent,
    PortfolioDescriptionComponent,
    PortfolioButtonDescriptionComponent,
    PortfolioUserLogoComponent,
    PortfolioUserDescriptionComponent,
  ],
  templateUrl: './portfolio-home-page.component.html',
  styleUrl: './portfolio-home-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PortfolioHomePageComponent implements OnInit {
  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit(): void {
    this.title.setTitle('Portafolio - Daniel Arias');

    this.meta.updateTag({
      name: 'description',
      content:
        'Daniel Arias, Full Stack Developer con 2+ años de experiencia en Angular, NestJS, TypeScript y PostgreSQL. Especializado en aplicaciones web escalables desde Pamplona, Colombia.',
    });

    this.meta.updateTag({
      name: 'keywords',
      content:
        'Daniel Arias, Full Stack Developer, Angular, NestJS, TypeScript, PostgreSQL, Docker, Caddy, TypeORM, desarrollador web, Pamplona Colombia, freelance developer, JWT authentication',
    });

    this.meta.updateTag({
      property: 'og:title',
      content: 'Daniel Arias - Full Stack Developer | Portfolio',
    });

    this.meta.updateTag({
      property: 'og:type',
      content: 'website',
    });

    this.meta.updateTag({
      property: 'og:image',
      content: '/favicon.ico',
    });

    this.meta.updateTag({
      property: 'og:image:width',
      content: '512',
    });

    this.meta.updateTag({
      property: 'og:image:height',
      content: '512',
    });

    this.meta.updateTag({
      name: 'twitter:card',
      content: 'summary_large_image',
    });

    this.meta.updateTag({
      name: 'twitter:title',
      content: 'Daniel Arias - Full Stack Developer',
    });

    this.meta.updateTag({
      name: 'twitter:description',
      content:
        'Full Stack Developer especializado en Angular & NestJS. 2+ años de experiencia, 15+ proyectos, 99.9% uptime.',
    });

    this.meta.updateTag({
      name: 'twitter:image',
      content: '/favicon.ico',
    });

    // Additional SEO tags
    this.meta.updateTag({
      name: 'author',
      content: 'Daniel David Arias Monroy',
    });

    this.meta.updateTag({
      name: 'robots',
      content: 'index, follow',
    });

    this.meta.updateTag({
      name: 'geo.region',
      content: 'CO-NSA',
    });

    this.meta.updateTag({
      name: 'geo.placename',
      content: 'Pamplona, Norte de Santander, Colombia',
    });
  }
}
