import type { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { PortfolioService } from '@portfolio/services/portfolio.service';

export const githubInterceptor: HttpInterceptorFn = (req, next) => {
  const portfolioService = inject(PortfolioService);

  const authToken = portfolioService.token();

  const newReq = req.clone({
    headers: req.headers.set('Authorization', `Bearer ${authToken}`),
  });

  return next(newReq);
};
