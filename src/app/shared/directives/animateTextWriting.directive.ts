import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  computed,
  Directive,
  effect,
  ElementRef,
  inject,
  input,
  PLATFORM_ID,
  signal,
} from '@angular/core';

@Directive({
  selector: '[animateTextWriting]',
})
export class AnimateTextWritingDirective implements AfterViewInit {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly element = inject<ElementRef<HTMLElement>>(ElementRef);

  listItem = input.required<string[]>();
  showCursor = input<boolean>(true);
  animationDelay = input<number>(1500);
  animationDuration = input<number>(100);

  private readonly currentItemIndex = signal(0);
  private readonly currentCharIndex = signal(0);
  private readonly isTyping = signal(false);

  private readonly currentText = computed(() => {
    const items = this.listItem();
    const index = this.currentItemIndex();
    return items[index] ?? '';
  });

  private readonly displayText = computed(() => {
    const text = this.currentText();
    const charIndex = this.currentCharIndex();
    return text.substring(0, charIndex);
  });

  private timeoutId?: ReturnType<typeof setTimeout>;

  constructor() {
    effect(() => {
      const el = this.element.nativeElement;
      if (el) {
        el.textContent = this.displayText();
      }
    });
  }

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const el = this.element.nativeElement;
    const items = this.listItem();

    if (!el || items.length === 0) return;

    if (this.showCursor()) {
      el.classList.add('typewriter-cursor');
    }

    this.startTypewriting();
  }

  ngOnDestroy(): void {
    this.clearTimeout();
  }

  private startTypewriting(): void {
    this.isTyping.set(true);
    this.currentCharIndex.set(0);
    this.typeNextCharacter();
  }

  private typeNextCharacter(): void {
    const text = this.currentText();
    const currentIndex = this.currentCharIndex();

    if (currentIndex < text.length) {
      this.currentCharIndex.update((i) => i + 1);
      this.timeoutId = setTimeout(() => this.typeNextCharacter(), this.animationDuration());
    } else {
      this.isTyping.set(false);
      this.scheduleNextItem();
    }
  }

  private scheduleNextItem(): void {
    this.timeoutId = setTimeout(() => {
      const items = this.listItem();
      this.currentItemIndex.update((i) => (i + 1) % items.length);
      this.startTypewriting();
    }, this.animationDelay());
  }

  private clearTimeout(): void {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
      this.timeoutId = undefined;
    }
  }
}
