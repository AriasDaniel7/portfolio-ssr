import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  inject,
  input,
  PLATFORM_ID,
  viewChild,
} from '@angular/core';
import { register, SwiperContainer } from 'swiper/element/bundle';
import { SwiperOptions } from 'swiper/types';
register();

export interface SwiperSlide {
  url: string;
  name: string;
}

@Component({
  selector: 'shared-custom-swiper',
  imports: [],
  templateUrl: './custom-swiper.html',
  styleUrl: './custom-swiper.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CustomSwiper implements AfterViewInit {
  private readonly platformId = inject(PLATFORM_ID);
  swiperEl = viewChild.required<ElementRef<SwiperContainer>>('swiper');
  slides = input.required<SwiperSlide[]>();

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    this.initSwiper();
  }

  private initSwiper() {
    const swiperOptions: SwiperOptions = {
      slidesPerView: 4,
      centeredSlides: true,
      spaceBetween: 10,
      effect: 'coverflow',
      pagination: {
        enabled: false,
      },
      grabCursor: true,
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      },
      navigation: {
        enabled: false,
      },
      loop: true,
      speed: 3000,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
      },
      freeMode: false, // Mantener movimiento controlado
      breakpoints: {
        640: {
          slidesPerView: 4,
        },
        768: {
          slidesPerView: 5,
        },
        1024: {
          slidesPerView: 7,
        },
      },
    };

    Object.assign(this.swiperEl().nativeElement, swiperOptions);
    requestAnimationFrame(() => {
      this.swiperEl().nativeElement.initialize();
    });
  }
}
