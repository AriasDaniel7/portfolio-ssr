import { Routes } from '@angular/router';

export const portfolioRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./layouts/portfolio-layout/portfolio-layout.component'),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/portfolio-home/portfolio-home-page.component'),
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

export default portfolioRoutes;
