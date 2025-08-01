import { Pipe, type PipeTransform } from '@angular/core';
import { GithubRepo } from '@portfolio/interfaces/github-repo.interface';

@Pipe({
  name: 'imageRepo',
})
export class ImageRepoPipe implements PipeTransform {
  transform(repo: GithubRepo) {
    if (!repo.homepage) {
      return `https://opengraph.githubassets.com/1/AriasDaniel7/${repo.name}`;
    }

    return `/assets/images/projects/${repo.name}.webp`;
  }
}
