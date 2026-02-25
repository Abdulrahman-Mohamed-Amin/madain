import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../../core/interface/project';
import { environment } from '../../../environments/environment';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../../core/language.service';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule, NgClass } from "@angular/common";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterModule, TranslateModule, NgClass , CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit{
  @Input() project?: Project
  url = environment.mediaUrl
  lang:string = ''
  constructor(private _lang:LanguageService){}

  ngOnInit(): void {
    this._lang.currentLang$.subscribe(res => {
      this.lang = res
    })
  }
}
