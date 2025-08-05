import { GithubRepo } from './github-repo.interface';

export interface GithubResponse {
  repos: GithubRepo[];
  pagination: Pagination;
}

export interface Pagination {
  page: number;
  total: number;
  hasNext: boolean;
  hasPrev: boolean;
}
