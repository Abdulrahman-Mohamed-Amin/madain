import { isPlatformBrowser, Location, PopStateEvent } from '@angular/common';
import { Component, effect, HostListener, inject, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { NavigationEnd, RouterModule , Router } from '@angular/router';
import * as AOS from 'aos';
import { filter } from 'rxjs';





@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'madain';
//  constructor() {

//  }

   constructor(@Inject(PLATFORM_ID) private platformId: Object  , private router: Router) 
 {
  if (isPlatformBrowser(this.platformId)) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      window.scrollTo(0, 0);
    });
  
  }
}
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init({
        duration: 1200,
        once: true,
      });



      



  }
}

}
