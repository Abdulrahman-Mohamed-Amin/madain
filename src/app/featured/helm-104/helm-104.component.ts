import { Component } from '@angular/core';
import { FooterComponent } from "../../shared/footer/footer.component";
import { HeaderComponent } from "../../shared/header/header.component";
import { MetaService } from '../../core/meta.service';

@Component({
  selector: 'app-helm-104',
  standalone: true,
  imports: [FooterComponent, HeaderComponent],
  templateUrl: './helm-104.component.html',
  styleUrl: './helm-104.component.css'
})
export class Helm104Component {

    constructor(private meta: MetaService) {
      this.meta.updateTags({
        title: 'مدائن العقارية | حلم 104',
        description:
          'مدائن العقارية شركة سعودية متخصصة في تطوير وتسويق العقارات السكنية تقدم شقق تمليك حديثة في جدة ومكة بمعايير جودة عالية .',
        url: 'https://madain.sa/helm-104',
        keywords:
          'عقارات, شركة مدائن العقارية, شقق تمليك جدة, فلل للبيع, مشاريع سكنية, شراء شقق, عقارات جدة',
      });
    }
}
