import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Experience } from '@interfaces/experience.interface';
import { InViewportDirective } from '@shared/directives/inViewport.directive';
import { CardExperience } from '@components/card-experience/card-experience';
import { CardEducation } from '@components/card-education/card-education';
import { CardCertification } from '@components/card-certification/card-certification';

@Component({
  selector: 'portfolio-section-experience',
  imports: [InViewportDirective, CardExperience, CardEducation, CardCertification],
  templateUrl: './section-experience.html',
  styleUrl: './section-experience.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionExperience {
  experiences = signal<Experience[]>([
    {
      company: 'Witsoft Group',
      ubication: 'Pamplona, Norte de Santander',
      role: 'Desarrollador Frontend (Angular)',
      period: 'Agosto 2024 - Junio 2025',
      descriptions: [
        'Desarrollé la aplicación web para la cartelera del Teatro Cecilia (www.teatrocecilia.co)',
        'Implementé componentes modulares y dinámicos, optimizando la experiencia de usuario y reduciendo los tiempos de carga en un 20%',
        'Facilité el flujo de trabajo bajo metodologías ágiles, alcanzando entregas semanales sin retrasos y reduciendo incidencias críticas en un 15%.',
        'Integré buenas prácticas de desarrollo que permitieron un producto final escalable y fácil demantener.',
      ],
      technologies: ['Angular', 'NestJS', 'PostgreSQL', 'Docker', 'Nx', 'Github'],
    },
    {
      company: 'Freelance',
      ubication: 'Remoto',
      role: 'Desarrollador web Full Stack',
      period: 'Enero 2023 - Actualidad',
      descriptions: [
        `Diseñé y desarrollé aplicaciones web completas utilizando Angular para el frontend y NestJS y Java
con Spring Boot para el backend, integrando bases de datos como PostgreSQL, MongoDB, Redis y
MySQL, logrando un ahorro del 25% en tiempos de desarrollo gracias al uso de TypeORM.`,
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
