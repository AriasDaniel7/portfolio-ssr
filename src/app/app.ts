import { Component, inject, signal } from '@angular/core';
import { Nav } from '@components/nav/nav';
import { SectionStart } from '@components/section-start/section-start';
import { SectionProjects } from '@components/section-projects/section-projects';
import { SectionExperience } from '@components/section-experience/section-experience';
import { SectionContact } from '@components/section-contact/section-contact';
import { Footer } from '@components/footer/footer';
import { MetaService } from '@services/meta.service';

@Component({
  selector: 'app-root',
  imports: [Nav, SectionStart, SectionProjects, SectionExperience, SectionContact, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private metaService = inject(MetaService);
  protected readonly title = signal('Portfolio | Daniel Arias');
}
