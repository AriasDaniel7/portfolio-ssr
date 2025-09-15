import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Experience } from '@portfolio/interfaces/experience.interface';
import { CardExperienceComponent } from '../card-experience/card-experience.component';

@Component({
  selector: 'portfolio-list-experiences',
  imports: [CardExperienceComponent],
  templateUrl: './list-experiences.component.html',
  styleUrl: './list-experiences.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListExperiencesComponent {
  experiences = signal<Experience[]>([
    {
      company: 'Witsoft Group',
      ubication: 'Pamplona, Norte de Santander',
      role: 'Desarrollador web Full Stack',
      period: 'Agosto 2024 - Julio 2025',
      descriptions: [
        'Desarrollé la aplicación web para la cartelera del Teatro Cecilia (www.teatrocecilia.co)',
        'Implementé componentes modulares y dinámicos, optimizando la experiencia de usuario y reduciendo los tiempos de carga en un 20%',
        'Facilité el flujo de trabajo bajo metodologías ágiles, alcanzando entregas semanales sin retrasos y reduciendo incidencias críticas en un 15%.',
        'Integré buenas prácticas de desarrollo que permitieron un producto final escalable y fácil demantener.',
      ],
      technologies: [
        'Angular',
        'NestJS',
        'PostgreSQL',
        'Docker',
        'Nx',
        'Github',
      ],
    },
    {
      company: 'Freelance',
      ubication: 'Remoto',
      role: 'Desarrollador web Full Stack',
      period: 'Enero 2023 - Actualidad',
      descriptions: [
        `Diseñé y desarrollé aplicaciones web completas utilizando Angular y NestJS, integrando bases de
datos como PostgreSQL, MongoDB, Redis y MySQL, logrando un ahorro del 25% en tiempos de
desarrollo gracias al uso de TypeORM.`,
        `Implementé despliegues automatizados en servidores VPS con Docker, Caddy, Cloudflare y Nginx,
garantizando una disponibilidad del 99.9% en los entornos productivos.`,
        `Optimicé consultas y procesos backend, reduciendo los tiempos de respuesta en un 40% en proyectos
de clientes.`,
        `Mejoré la gestión de tareas y coordinación de proyectos usando Jira y Azure DevOps, logrando una
mayor trazabilidad y cumplimiento de objetivos.`,
      ],
      technologies: [
        'Angular',
        'NestJS',
        'PostgreSQL',
        'Docker',
        'Nx',
        'Github',
        'Caddy',
        'Cloudflare',
        'CI/CD',
        'Vps',
        'TypeORM',
        'MongoDB',
        'Redis',
        'MySQL',
        'Jira',
        'Azure DevOps',
      ],
    },
  ]);
}
