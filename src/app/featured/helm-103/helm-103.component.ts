import { Component } from '@angular/core';
import { FooterComponent } from "../../shared/footer/footer.component";
import { HeaderComponent } from "../../shared/header/header.component";
import { MetaService } from '../../core/meta.service';

@Component({
  selector: 'app-helm-103',
  standalone: true,
  imports: [FooterComponent, HeaderComponent],
  templateUrl: './helm-103.component.html',
  styleUrl: './helm-103.component.css'
})
export class Helm103Component {

    constructor(private meta: MetaService) {
      this.meta.updateTags({
        title: 'مدائن العقارية | حبم 103',
        description:
          'مدائن العقارية شركة سعودية متخصصة في تطوير وتسويق العقارات السكنية تقدم شقق تمليك حديثة في جدة ومكة بمعايير جودة عالية .',
        url: 'https://madain.sa/helm-103',
        keywords:
          'عقارات, شركة مدائن العقارية, شقق تمليك جدة, فلل للبيع, مشاريع سكنية, شراء شقق, عقارات جدة',
      });
    }
}
