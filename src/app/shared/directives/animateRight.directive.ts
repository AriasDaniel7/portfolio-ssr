import { isPlatformBrowser } from '@angular/common';
import {
  Directive,
  ElementRef,
  inject,
  input,
  OnInit,
  output,
  PLATFORM_ID,
} from '@angular/core';
import { createTimeline } from 'animejs';

@Directive({
  selector: '[animateRight]',
})
export class AnimateRightDirective implements OnInit {
  private platformId = inject(PLATFORM_ID);
  loadingContainer = inject<ElementRef<HTMLDivElement>>(ElementRef);
  animationComplete = output<void>();
  animationStart = output<void>();
  animationDelay = input<number>(3000);
  animationDuration = input<number>(3000);

  ngOnInit(): void {
    const container = this.loadingContainer.nativeElement;
    if (!container) return;
    if (!isPlatformBrowser(this.platformId)) return;
    this.animate(container);
  }

  private animate(container: HTMLDivElement) {

    createTimeline({
      defaults: {
        duration: this.animationDuration(),
        delay: this.animationDelay(),
        ease: 'inOutExpo',
        onComplete: () => {
          this.animationComplete.emit();
        },
        onBegin: () => {
          this.animationStart.emit();
        },
      },
    })
      .add(container, {
        translateX: '100%',
      })
      .init();
  }
}
