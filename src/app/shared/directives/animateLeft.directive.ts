import { createTimeline } from 'animejs';
import {
  Directive,
  ElementRef,
  inject,
  input,
  OnInit,
  output,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[animationLeft]',
})
export class AnimateLeftDirective implements OnInit {
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
        translateX: '-100%',
      })
      .init();
  }
}
