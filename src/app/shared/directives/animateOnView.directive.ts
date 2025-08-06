import { isPlatformBrowser } from '@angular/common';
import {
  Directive,
  ElementRef,
  inject,
  input,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  Renderer2,
} from '@angular/core';
import { Observable, Subscription, debounceTime } from 'rxjs';

@Directive({
  selector: '[appAnimateOnView]',
})
export class AnimateOnViewDirective implements OnInit, OnDestroy {
  animateOnView = input<string>('animate-fadeInUp');
  threshold = input<number>(0.5);
  isContinuous = input<boolean>(true);
  rootMargin = input<string>('150px 0px 150px 0px');
  debounceTime = input<number>(100);

  private platformId = inject(PLATFORM_ID);
  private observer?: IntersectionObserver;
  private elementRef = inject<ElementRef<HTMLElement>>(ElementRef);
  private renderer = inject(Renderer2);
  private subscription?: Subscription;

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const element = this.elementRef.nativeElement;
    if (!element) return;

    this.renderer.addClass(element, 'opacity-0');

    this.subscription = this.createAndObserve()?.subscribe((isVisible) => {
      if (isVisible) {
        this.renderer.removeClass(element, 'opacity-0');
        this.renderer.addClass(element, this.animateOnView());
      } else {
        this.renderer.removeClass(element, this.animateOnView());
        this.renderer.addClass(element, 'opacity-0');
      }
    });
  }

  private createAndObserve() {
    const element = this.elementRef.nativeElement;
    if (!element) return;

    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: this.rootMargin(),
      threshold: [0, this.threshold(), 1],
    };

    return new Observable<boolean>((subscriber) => {
      const intersectionObserver = new IntersectionObserver((entries) => {
        const { isIntersecting, intersectionRatio } = entries[0];

        if (intersectionRatio >= this.threshold()) {
          subscriber.next(true);
        } else if (intersectionRatio === 0) {
          subscriber.next(false);
        }

        if (isIntersecting && !this.isContinuous()) {
          intersectionObserver.disconnect();
        }
      }, options);

      intersectionObserver.observe(element);
      this.observer = intersectionObserver;

      return {
        unsubscribe() {
          intersectionObserver.disconnect();
        },
      };
    }).pipe(debounceTime(this.debounceTime()));
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
    this.observer?.disconnect();
  }
}
