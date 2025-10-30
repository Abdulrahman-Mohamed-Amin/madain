import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  Component,
  Inject,
  Input,
  PLATFORM_ID,
  Renderer2,
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../../core/language.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  open: boolean = true;
  current:string = ""
  constructor(
    public languageService: LanguageService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  switchLang() {
    this.languageService.switchLang();
  }

  get currentLang() {
    return this.languageService.currentLang;
  }
}
