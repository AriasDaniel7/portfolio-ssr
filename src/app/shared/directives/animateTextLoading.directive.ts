import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Directive,
  ElementRef,
  inject,
  input,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { createTimeline, stagger, text } from 'animejs';

@Directive({
  selector: '[animeTextLoading]',
})
export class AnimateTextLoadingDirective implements AfterViewInit, OnInit {
  private platformId = inject(PLATFORM_ID);
  private elementRef = inject<ElementRef<HTMLElement>>(ElementRef);
  animationDelay = input<number>(500);
  animationDuration = input<number>(500);

  ngOnInit(): void {
    const textElement = this.elementRef.nativeElement;
    textElement.style.opacity = '0';
  }

  ngAfterViewInit(): void {
    const textElement = this.elementRef.nativeElement;
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
        duration: this.animationDuration(),
        delay: this.animationDelay(),
      },
    }).add(chars, {
      opacity: [
        {
          to: [0, 1],
        },
      ],
      scale: [
        {
          to: [0, 1],
        },
      ],
      rotate: [
        {
          to: [-90, 0],
        },
      ],
      duration: stagger(200, { start: 500 }),
      ease: 'outBounce',
    });
  }
}
