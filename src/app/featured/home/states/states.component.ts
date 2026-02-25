import { Component, ElementRef, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { ProjectsService } from '../../../core/services/projects.service';
import { log } from 'console';
import { TranslateModule } from '@ngx-translate/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-states',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './states.component.html',
  styleUrl: './states.component.css'
})
export class StatesComponent {
  @ViewChild('statsSection') statsSection!: ElementRef;
  projectNum: number = 0
  buildingNum: number = 0
  units: number = 0
  surface: number = 0
  ground: number = 0

  private hasAnimated = false;

constructor(
  private projects: ProjectsService,
  @Inject(PLATFORM_ID) private platformId: Object
) {}

ngAfterViewInit(): void {
  if (isPlatformBrowser(this.platformId)) {
    this.observeSection();
  }
  this.getNumbers();
}
  getNumbers() {
    this.projects.getProjet().subscribe(res => {
      this.projectNum = res.length

      const totalBuildings = res.reduce((acc: number, cur) => {
        return acc + (Number(cur.buildingCount) || 0);
      }, 0);

      const unitsCount = res.reduce((acc: number, cur) => {
        return acc + (Number(cur.unitsCount) || 0);
      }, 0)
      const sutfaceArea = res.reduce((acc: number, cur) => {
        return acc + (Number(cur.surfaceArea) || 0);
      }, 0)
      const groundArea = res.reduce((acc: number, cur) => {
        return acc + (Number(cur.groundArea) || 0);
      }, 0)

      this.buildingNum = totalBuildings
      this.units = unitsCount
      this.surface = +sutfaceArea.toFixed()
      this.ground = +groundArea.toFixed()
    })
  }


  // =========================
  // مراقبة ظهور السيكشن
  // =========================
  private observeSection() {

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {

        if (entry.isIntersecting && !this.hasAnimated) {
          this.hasAnimated = true;
          this.startCounters();
          observer.disconnect();
        }

      });
    }, {
      threshold: 0.3
    });

    observer.observe(this.statsSection.nativeElement);
  }

  // =========================
  // تشغيل العدادات
  // =========================
  private startCounters() {

    const counters = this.statsSection.nativeElement.querySelectorAll('.count');

    counters.forEach((counter: HTMLElement, index: number) => {

      const target = Number(counter.getAttribute('data-target')) || 0;

      setTimeout(() => {
        this.animateCount(counter, target);
      }, index * 120); // stagger effect

    });
  }

  // =========================
  // دالة العدّاد (تصاعد الأرقام)
  // =========================
  private animateCount(element: HTMLElement, target: number) {
    const duration = 1200;
    const startTime = performance.now();

    const formatter = new Intl.NumberFormat('en-US'); // ✅ أرقام إنجليزية

    const update = (currentTime: number) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.floor(eased * target);

      element.textContent = formatter.format(value);

      if (progress < 1) requestAnimationFrame(update);
      else element.textContent = formatter.format(target);
    };

    requestAnimationFrame(update);
  }

}
