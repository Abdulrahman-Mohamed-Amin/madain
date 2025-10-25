import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-bayot',
  standalone: true,
  imports: [],
  templateUrl: './bayot.component.html',
  styleUrl: './bayot.component.css'
})
export class BayotComponent {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  
    ngAfterViewInit(): void {
      if (!isPlatformBrowser(this.platformId)) return;
      const swiper = new Swiper('.mySwiper2', {
        slidesPerView:1 ,
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
        speed: 500,
      });
    }

}
