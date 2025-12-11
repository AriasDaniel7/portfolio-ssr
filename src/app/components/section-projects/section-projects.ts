import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Repository } from '@interfaces/repository.interface';
import { InViewportDirective } from '@shared/directives/inViewport.directive';
import { CardProject } from '@components/card-project/card-project';

@Component({
  selector: 'portfolio-section-projects',
  imports: [InViewportDirective, CardProject],
  templateUrl: './section-projects.html',
  styleUrl: './section-projects.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionProjects {
  repositories = signal<Repository[]>([
    {
      name: 'Teatro Cecilia',
      description:
        '🎬 Sitio web de cine en Angular: cartelera, horarios y estrenos con UI responsive, animaciones y optimización de imágenes. Desarrollado junto a Witsoft Group.',
      topics: [
        'Angular',
        'TypeScript',
        'TailwindCSS',
        'RxJS',
        'Signals',
        'NgOptimizedImage',
        'Swiper',
        'Responsive',
        'CI/CD',
        'Witsoft Group',
      ],
      homepage: 'https://www.teatrocecilia.co',
      image: '/assets/images/projects/teatrocecilia.webp',
    },
    {
      name: 'Stark Cinemas',
      description:
        '🍿 Plataforma de cine hecha con Angular: listado de películas, funciones y promociones, enfocada en accesibilidad y rendimiento. Proyecto realizado con Witsoft Group.',
      topics: [
        'Angular',
        'TypeScript',
        'TailwindCSS',
        'RxJS',
        'Signals',
        'NgOptimizedImage',
        'Swiper',
        'Responsive',
        'CI/CD',
        'Witsoft Group',
      ],
      homepage: 'https://www.starkcinemas.co',
      image: '/assets/images/projects/starkcine.webp',
    },
    {
      name: 'Github-issues-ssr',
      description:
        '🐛 Aplicación Angular SSR para visualizar y gestionar issues de GitHub con TanStack Query y TailwindCSS',
      topics: [
        'Angular',
        'SSR',
        'TypeScript',
        'TailwindCSS',
        'TanStack Query',
        'RxJS',
        'GitHub API',
      ],
      html_url: 'https://github.com/AriasDaniel7/github-issues-ssr',
      homepage: 'https://moonlit-crumble-46dc47.netlify.app/issues',
      image: '/assets/images/projects/github-issues-ssr.webp',
    },
    {
      name: 'Json-server-heroesapp',
      description:
        '🦸‍♂️ API REST de Héroes - Servidor JSON simple y rápido para una aplicación de superhéroes con datos de Marvel y DC Comics',
      topics: [
        'JSON Server',
        'REST API',
        'TypeScript',
        'Heroes',
        'Marvel',
        'DC Comics',
        'JavaScript',
        'Node.js',
      ],
      image: 'https://opengraph.githubassets.com/1/AriasDaniel7/json-server-heroesApp',
      html_url: 'https://github.com/AriasDaniel7/json-server-heroesApp',
    },
    {
      name: 'Maps-angular',
      description:
        '🗺️ Aplicación interactiva de mapas desarrollada con Angular y Mapbox GL, que incluye funcionalidades de visualización en pantalla completa, gestión de marcadores personalizados y catálogo de propiedades inmobiliarias con mini-mapas.',
      topics: [
        'Angular',
        'TypeScript',
        'Mapbox GL',
        'RxJS',
        'NgOptimizedImage',
        'DaisyUI',
        'Geolocation',
        'SCSS',
        'TailwindCSS',
      ],
      image: '/assets/images/projects/maps-angular.webp',
      html_url: 'https://github.com/AriasDaniel7/maps-angular',
      homepage: 'https://maps-angular.vercel.app/fullscreen',
    },
    {
      name: 'Nest-pokedex',
      description:
        '🚀 API REST de Pokédex construida con NestJS y MongoDB. Aplicación full-stack con CRUD completo, paginación, validaciones y seeding automático desde PokeAPI',
      topics: [
        'Api REST',
        'NestJS',
        'MongoDB',
        'Mongoose',
        'TypeScript',
        'PokeAPI',
        'CRUD',
        'Node.js',
      ],
      image: '/assets/images/projects/Nest-Pokedex.webp',
      html_url: 'https://github.com/AriasDaniel7/Nest-Pokedex',
      homepage: 'https://pokedex-nine-indol.vercel.app',
    },
    {
      name: 'Nest-teslo-shop-backend',
      description:
        '🛍️ API REST para e-commerce desarrollada con NestJS, TypeScript y PostgreSQL. Incluye autenticación JWT, autorización por roles, gestión de productos, carga de archivos, WebSockets para chat en tiempo real y documentación con Swagger.',
      topics: [
        'Api REST',
        'NestJS',
        'PostgreSQL',
        'TypeScript',
        'JWT',
        'Docker',
        'Ecommerce',
        'Swagger',
        'Node.js',
      ],
      image: '/assets/images/projects/teslo-shop-angular.webp',
      html_url: 'https://github.com/AriasDaniel7/nest-teslo-shop-backend',
      homepage: 'https://nest-teslo-shop-backend-jjzp.onrender.com',
    },
    {
      name: 'Pokemon-ssr',
      description:
        '🎮 Aplicación Angular con SSR para explorar el mundo Pokémon con optimización SEO y rendimiento mejorado',
      topics: ['Angular', 'SSR', 'TypeScript', 'TailwindCSS', 'Caddy Server', 'RxJS', 'POKEAPI'],
      image: '/assets/images/projects/pokemon-ssr.webp',
      html_url: 'https://github.com/AriasDaniel7/pokemon-ssr',
      homepage: 'https://pokemon-ssr-poke.netlify.app',
    },
    {
      name: 'Gif-app-angular',
      description:
        '🎭 Aplicación web desarrollada en Angular 18 para buscar y visualizar GIFs usando la API de Giphy con interfaz Material Design y diseño responsive',
      topics: [
        'Angular',
        'TypeScript',
        'Angular Material',
        'RxJS',
        'Giphy API',
        'Material Design',
        'TailwindCSS',
      ],
      image: '/assets/images/projects/Gif-App-Angular.webp',
      html_url: 'https://github.com/AriasDaniel7/Gif-App-Angular',
      homepage: 'https://gif-app-angular-orpin.vercel.app',
    },
    {
      name: 'Gif-app-angular-zonless',
      description:
        '🎯 Aplicación web Angular 19 para buscar y visualizar GIFs usando la API de Giphy. Implementa zoneless change detection, Tailwind CSS y arquitectura modular con componentes reutilizables.',
      topics: [
        'Angular',
        'TypeScript',
        'Zoneless',
        'RxJS',
        'Giphy API',
        'TailwindCSS',
      ],
      image: '/assets/images/projects/Gif-App-Angular-Zonless.webp',
      html_url: 'https://github.com/AriasDaniel7/Gif-App-Angular-Zonless',
      homepage: 'https://gif-app-angular-zonless.vercel.app',
    },
  ]);
}
