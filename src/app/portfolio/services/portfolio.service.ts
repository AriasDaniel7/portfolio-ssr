import { HttpClient, HttpParams } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
import { GithubOptionsRepos } from '@portfolio/interfaces/github-options-repos.interface';
import { GithubRepo } from '@portfolio/interfaces/github-repo.interface';
import { GithubResponse } from '@portfolio/interfaces/github-response.interface';
import { firstValueFrom, map, tap } from 'rxjs';
import { injectQuery } from '@tanstack/angular-query-experimental';

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  private http = inject(HttpClient);
  private API_URL = environment.apiUrl;
  private _GITHUB_TOKEN = signal<string>(environment.githubToken);

  currentPage = signal(1);
  pageSize = signal(3);

  token = computed(this._GITHUB_TOKEN);

  getRepositories(
    options: GithubOptionsRepos = { visibility: 'all', page: 1 }
  ) {
    const params = new HttpParams({
      fromObject: {
        ...options,
      },
    });
    return this.http
      .get<GithubRepo[]>(`${this.API_URL}/user/repos`, {
        params,
        observe: 'response',
      })
      .pipe(
        map((response) => {
          const linkHeader = response.headers.get('Link');
          const totalCount = response.headers.get('X-Total-Count');

          return {
            repos: response.body || [],
            pagination: {
              page: options.page || 1,
              total: totalCount
                ? parseInt(totalCount)
                : (response.body || []).length,
              hasNext: linkHeader ? linkHeader.includes('rel="next"') : false,
              hasPrev: (options.page || 1) > 1,
            },
          } as GithubResponse;
        })
      );
  }

  repositoriesQuery = injectQuery(() => ({
    queryKey: [
      'repositories',
      {
        page: this.currentPage(),
        per_page: this.pageSize(),
      },
    ],
    queryFn: () =>
      firstValueFrom(
        this.getRepositories({
          page: this.currentPage(),
          per_page: this.pageSize(),
        })
      ),
  }));
}
