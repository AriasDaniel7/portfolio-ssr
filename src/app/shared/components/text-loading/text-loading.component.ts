import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  output,
  signal,
} from '@angular/core';
import { AnimateLeftDirective } from '@shared/directives/animateLeft.directive';
import { AnimateRightDirective } from '@shared/directives/animateRight.directive';
import { AnimateTextLoadingDirective } from '@shared/directives/animateTextLoading.directive';

@Component({
  selector: 'shared-text-loading',
  imports: [
    AnimateTextLoadingDirective,
    AnimateLeftDirective,
    AnimateRightDirective,
  ],
  templateUrl: './text-loading.component.html',
  styleUrl: './text-loading.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextLoadingComponent {
  loadingComplete = output<void>();

  isVisible = signal(true);
  isAnimateInit = signal(false);

  @HostBinding('class.hidden')
  get hidden() {
    return !this.isVisible() && this.isAnimateInit();
  }

  onAnimationComplete() {
    this.isVisible.set(false);
    this.loadingComplete.emit();
  }

  onAnimationStart() {
    this.isAnimateInit.set(true);
  }
}
