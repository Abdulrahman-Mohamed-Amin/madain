import { isPlatformBrowser, NgClass } from '@angular/common';
import { Component, Inject, Input, PLATFORM_ID } from '@angular/core';
import { RouterModule } from '@angular/router';
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
Swiper.use([Navigation, Pagination, Autoplay]);

@Component({
  selector: 'app-proj',
  standalone: true,
  imports: [RouterModule, NgClass],
  templateUrl: './proj.component.html',
  styleUrl: './proj.component.css',
})
export class ProjComponent {
  @Input() title = true;
  @Input() padding = true;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const swiper = new Swiper('.mySwiper', {
      breakpoints: {
        0: { slidesPerView: 1 }, 
        768: { slidesPerView: 2 }, 
        1024: { slidesPerView: 3 }, 
      },
      spaceBetween: 20,
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
        dynamicMainBullets: 1,
      },
      autoplay: {
        delay: 3000,
      },
      speed: 500,
    });
  }
}
