import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Directive,
  ElementRef,
  inject,
  input,
  OnDestroy,
  output,
  PLATFORM_ID,
  signal,
} from '@angular/core';
import { debounceTime, distinctUntilChanged, Subject, takeUntil } from 'rxjs';

export type VpAnimation = 'slideRight' | 'slideLeft' | 'fadeIn' | 'slideDown' | 'slideUp';

@Directive({
  selector: '[appInViewport]',
  host: {
    '[class.opacity-0]': '!isVisible()',
    '[class.duration-300]': '!isVisible()',
  },
})
export class InViewportDirective implements AfterViewInit, OnDestroy {
  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly platformId = inject(PLATFORM_ID);

  vpAnimation = input<VpAnimation>('fadeIn');
  vpOnce = input(true);
  threshold = input(0.15);
  rootMargin = input('0px');
  debounce = input(100);

  entered = output<void>();
  exited = output<void>();

  private observer?: IntersectionObserver;
  protected isVisible = signal(false);
  private hasAnimated = signal(false);
  private destroy$ = new Subject<void>();
  private visibility$ = new Subject<boolean>();

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    this.applyPreState();
    this.setupVisibilityStream();
    this.createObserver();
  }

  private applyPreState(): void {
    const anim = this.vpAnimation();
    this.el.nativeElement.classList.add(`pre-${anim}`);
  }

  private setupVisibilityStream(): void {
    this.visibility$
      .pipe(distinctUntilChanged(), debounceTime(this.debounce()), takeUntil(this.destroy$))
      .subscribe((isIntersecting) => {
        if (isIntersecting) {
          if (!this.hasAnimated() || !this.vpOnce()) {
            this.play();
            this.entered.emit();
            this.hasAnimated.set(true);
          }
        } else {
          this.exited.emit();
          if (!this.vpOnce()) {
            this.reset();
          }
        }
      });
  }

  private createObserver(): void {
    const element = this.el.nativeElement;

    this.observer?.disconnect();
    this.observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        this.visibility$.next(entry.isIntersecting);

        if (entry.isIntersecting && this.vpOnce() && this.hasAnimated()) {
          this.observer?.unobserve(element);
        }
      },
      {
        root: null,
        rootMargin: this.rootMargin(),
        threshold: this.threshold(),
      }
    );
    this.observer.observe(element);
  }

  private play(): void {
    const element = this.el.nativeElement;
    const anim = this.vpAnimation();

    this.isVisible.set(true);
    element.classList.remove(`pre-${anim}`);
    element.classList.add(`animate-${anim}`);
  }

  private reset(): void {
    const element = this.el.nativeElement;
    const anim = this.vpAnimation();

    element.classList.remove(`animate-${anim}`);
    this.isVisible.set(false);
    this.hasAnimated.set(false);
    element.classList.add(`pre-${anim}`);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    this.observer?.disconnect();
  }
}
