import { isPlatformBrowser } from '@angular/common';
import {
  Directive,
  ElementRef,
  inject,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { createTimeline, stagger, text, Target } from 'animejs';

@Directive({
  selector: '[animateTitleLoading]',
})
export class AnimateTitleLoadingDirective implements OnInit {
  private platformId = inject(PLATFORM_ID);
  private elementRef = inject<ElementRef<HTMLElement>>(ElementRef);

  ngOnInit(): void {
    const textElement = this.elementRef.nativeElement;
    textElement.style.opacity = '0';
    if (!textElement) return;
    if (!isPlatformBrowser(this.platformId)) return;
    this.animateText(textElement);
  }

  private animateText(textElement: HTMLElement) {
    textElement.style.opacity = '1';
    const { chars }: { chars: HTMLSpanElement[] } = text.split(textElement, {
      words: false,
      chars: true,
    });

    chars.forEach((char) => {
      char.style.opacity = '0';
    });

    createTimeline({
      defaults: {
        ease: 'inOutQuad',
        loop: true,
        loopDelay: 2000,
      },
    }).add(
      chars,
      {
        opacity: [
          {
            to: [0, 1],
            duration: 500,
          },
          {
            to: [1, 0],
            duration: 500,
            delay: 2000,
          },
        ],
        scale: [
          {
            to: [0, 1],
            duration: 500,
          },
          {
            to: [1, 0],
            delay: 2000,
          },
        ],
        rotate: [
          {
            to: ['-90deg', '0deg'],
            duration: 500,
          },
          {
            to: ['0deg', '-90deg'],
            delay: 2000,
          },
        ],
        duration: stagger(50, { start: 500 }),
        ease: 'outBounce',
      },
      stagger(200)
    );
  }
}
