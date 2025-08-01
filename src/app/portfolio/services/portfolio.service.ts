import { HttpClient, HttpParams } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
import { GithubOptionsRepos } from '@portfolio/interfaces/github-options-repos.interface';
import { GithubRepo } from '@portfolio/interfaces/github-repo.interface';

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  private http = inject(HttpClient);
  private API_URL = environment.apiUrl;
  private _GITHUB_TOKEN = signal<string>(environment.githubToken);

  token = computed(this._GITHUB_TOKEN);

  getRepositories(options: GithubOptionsRepos = { visibility: 'all' }) {
    const params = new HttpParams({
      fromObject: {
        ...options,
      },
    });
    return this.http.get<GithubRepo[]>(`${this.API_URL}/user/repos`, {
      params,
    });
  }
}
