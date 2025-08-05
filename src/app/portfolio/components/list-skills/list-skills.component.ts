import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Skill } from '@portfolio/interfaces/skill.interface';
import { CardSkillComponent } from "../card-skill/card-skill.component";

@Component({
  selector: 'portfolio-list-skills',
  imports: [CardSkillComponent],
  templateUrl: './list-skills.component.html',
  styleUrl: './list-skills.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListSkillsComponent {
  skills = signal<Skill[]>([
    {
      name: 'Angular',
      icon: '/assets/images/skills/angular.svg',
      level: '95%', // Tu tecnología principal
    },
    {
      name: 'NestJS',
      icon: '/assets/images/skills/nestjs.svg',
      level: '92%', // Backend principal
    },
    {
      name: 'TypeScript',
      icon: '/assets/images/skills/typescript.svg',
      level: '90%', // Esencial para Angular/NestJS
    },
    {
      name: 'TypeORM',
      icon: '/assets/images/skills/typeorm.svg',
      level: '85%', // ORM específico
    },
    {
      name: 'Docker',
      icon: '/assets/images/skills/docker.svg',
      level: '80%', // Herramienta de contenedores
    },
    {
      name: 'RxJS',
      icon: '/assets/images/skills/rxjs.svg',
      level: '88%', // Importante para Angular
    },
    {
      name: 'Tailwind CSS',
      icon: '/assets/images/skills/tailwindcss.svg',
      level: '85%', // Framework CSS
    },
    {
      name: 'Postman',
      icon: '/assets/images/skills/postman.svg',
      level: '90%', // Herramienta de testing
    },
    {
      name: 'PostgreSQL',
      icon: '/assets/images/skills/postgresql.svg',
      level: '85%', // Base de datos principal
    },
    {
      name: 'JWT',
      icon: '/assets/images/skills/jwt.svg',
      level: '90%', // Autenticación
    },
    {
      name: 'Redis',
      icon: '/assets/images/skills/redis.svg',
      level: '75%', // Cache/sesiones
    },
    {
      name: 'MySQL',
      icon: '/assets/images/skills/mysql.svg',
      level: '80%', // Base de datos alternativa
    },
    {
      name: 'Firebase',
      icon: '/assets/images/skills/firebase.svg',
      level: '70%', // Servicios cloud
    },
    {
      name: 'Sass',
      icon: '/assets/images/skills/sass.svg',
      level: '85%', // Preprocesador CSS
    },
    {
      name: 'Node.js',
      icon: '/assets/images/skills/nodejs.svg',
      level: '88%', // Runtime para NestJS
    },
    {
      name: 'Nx',
      icon: '/assets/images/skills/nx_dark.svg',
      level: '75%', // Monorepo tools
    },
    {
      name: 'cPanel',
      icon: '/assets/images/skills/cP_orange.svg',
      level: '80%', // Hosting management
    },
    {
      name: 'Cloudflare',
      icon: '/assets/images/skills/cloudflare.svg',
      level: '75%', // CDN/DNS
    },
  ]);
}
