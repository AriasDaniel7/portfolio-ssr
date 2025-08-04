import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Directive,
  ElementRef,
  inject,
  input,
  PLATFORM_ID,
} from '@angular/core';

@Directive({
  selector: '[animateTextWriting]',
})
export class AnimateTextWritingDirective implements AfterViewInit {
  private platformId = inject(PLATFORM_ID);
  private textElement = inject<ElementRef<HTMLElement>>(ElementRef);
  private currentItemIndex = 0;
  listItem = input<string[]>(['Item 1', 'Item 2', 'Item 3']);

  showCursor = input<boolean>(true);
  animationDelay = input<number>(1500);
  animationDuration = input<number>(100);

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const element = this.textElement.nativeElement;
    if (!element) return;

    this.startTypewritingAnimation(element);
  }

  private startTypewritingAnimation(element: HTMLElement) {
    if (this.showCursor()) {
      element.classList.add('typewriter-cursor');
    }

    element.textContent = '';

    this.typeNextItem(element);
  }

  private typeNextItem(element: HTMLElement) {
    const items = this.listItem();
    if (items.length === 0) return;

    const currentText = items[this.currentItemIndex];
    this.typeText(element, currentText);
  }

  private typeText(element: HTMLElement, text: string) {
    let currentIndex = 0;

    const typeNextCharacter = () => {
      if (currentIndex < text.length) {
        element.textContent += text.charAt(currentIndex);
        currentIndex++;
        setTimeout(typeNextCharacter, this.animationDuration());
      } else {
        setTimeout(() => {
          element.textContent = '';
          this.currentItemIndex =
            (this.currentItemIndex + 1) % this.listItem().length;
          this.typeNextItem(element);
        }, this.animationDelay());
      }
    };

    typeNextCharacter();
  }
}
