import { Injectable, PLATFORM_ID, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class ScrollRestoreService {
  private readonly platformId = inject(PLATFORM_ID);
  private y = signal(0);
  private key = () => `scroll:${location.pathname}`;

  init(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    window.addEventListener('scroll', () => this.y.set(window.scrollY), { passive: true });
    window.addEventListener('beforeunload', () => {
      try {
        sessionStorage.setItem(this.key(), String(this.y()));
      } catch {}
    });
  }

  restore(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    let target = 0;
    try {
      const stored = sessionStorage.getItem(this.key());
      if (stored) target = Number(stored) || 0;
    } catch {}
    if (target === 0) return;

    const attempt = (tries: number) => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll >= target || tries > 60) {
        window.scrollTo(0, target);
        return;
      }
      requestAnimationFrame(() => attempt(tries + 1));
    };
    requestAnimationFrame(() => attempt(0));
  }
}
