import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { FooterComponent } from "../../shared/footer/footer.component";
import { HeaderComponent } from "../../shared/header/header.component";
import { environment } from '../../../environments/environment';
import { Project } from '../../core/interface/project';
import { MetaService } from '../../core/meta.service';
import { ProjectsService } from '../../core/services/projects.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { CommonModule, isPlatformBrowser } from '@angular/common';

import { LanguageService } from '../../core/language.service';
import Swiper from 'swiper';
import { log } from 'node:console';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-project-detils',
  standalone: true,
  imports: [FooterComponent, HeaderComponent, CommonModule, TranslateModule],
  templateUrl: './project-detils.component.html',
  styleUrl: './project-detils.component.css'
})
export class ProjectDetilsComponent {
  url = environment.mediaUrl
  mapUrl = ''
  project: Project | null = null
  lang: string = ''
  surfaceArea: string = ''
  groundArea: string = ''

  countSoldUnit: any[] = []

  constructor(private meta: MetaService, private _project: ProjectsService, private _route: ActivatedRoute, private _lang: LanguageService, @Inject(PLATFORM_ID) private platformId: Object) {
    this.meta.updateTags({
      title: 'مدائن العقارية | حلم 101',
      description:
        'مدائن العقارية شركة سعودية متخصصة في تطوير وتسويق العقارات السكنية تقدم شقق تمليك حديثة في جدة ومكة بمعايير جودة عالية .',
      url: 'https://madain.sa/helm-101',
      keywords:
        'عقارات, شركة مدائن العقارية, شقق تمليك جدة, فلل للبيع, مشاريع سكنية, شراء شقق, عقارات جدة',
    });
  }

  ngOnInit(): void {
    this.getProject()
    this._lang.currentLang$.subscribe(res => {
      this.lang = res
    })

  }

  getProject() {
    this._project.getProjetById(this._route.snapshot.params['id']).pipe(
      map(project => ({
        ...project,
        buildings: project.buildings.map(building => ({
          ...building,
          units: [...building.units].sort((a, b) => {
            const [aChar, aNum] = a.arTitle.split('-');
            const [bChar, bNum] = b.arTitle.split('-');

            // 1️⃣ ترتيب حسب الرقم
            if (+aNum !== +bNum) {
              return +aNum - +bNum;
            }

            // 2️⃣ ترتيب أبجدي
            return aChar.localeCompare(bChar);
          })
        }))
      }))
    ).subscribe(res => {
      this.project = res
      console.log(res);
      this.surfaceArea = Number(res?.surfaceArea).toFixed()
      this.groundArea = Number(res?.groundArea).toFixed()
      this.getSoldUnit()
    })
  }

  getSoldUnit() {
    let sold = this.project?.buildings.map(b => {
      let s = b.units.filter(u => u.isSealed).length
      this.countSoldUnit.push({ id: b.id, sold: s })
      console.log(this.countSoldUnit[0])
    })
  }
  async ngAfterViewInit(): Promise<void> {
    if (!isPlatformBrowser(this.platformId)) return;
    const swiper = new Swiper('.mySwiper', {
      spaceBetween: 20,
      breakpoints: {
        1200: {
          slidesPerView: 4
        },
        768: {
          slidesPerView: 3
        },
        578: {
          slidesPerView: 2
        }
      },
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
        delay: 2000
      },
      speed: 500,
    });
  }



}
