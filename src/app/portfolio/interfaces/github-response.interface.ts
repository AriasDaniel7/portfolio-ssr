import { GithubRepo } from './github-repo.interface';

export interface GithubResponse {
  repos: GithubRepo[];
  pagination: {
    page: number;
    total: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}
