import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { FooterComponent } from "../../shared/footer/footer.component";
import { MetaService } from '../../core/meta.service';

@Component({
  selector: 'app-helm-101',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './helm-101.component.html',
  styleUrl: './helm-101.component.css'
})
export class Helm101Component {
    constructor(private meta: MetaService) {
      this.meta.updateTags({
        title: 'مدائن العقارية | حلم 101',
        description:
          'مدائن العقارية شركة سعودية متخصصة في تطوير وتسويق العقارات السكنية تقدم شقق تمليك حديثة في جدة ومكة بمعايير جودة عالية .',
        url: 'https://madain.sa/helm-101',
        keywords:
          'عقارات, شركة مدائن العقارية, شقق تمليك جدة, فلل للبيع, مشاريع سكنية, شراء شقق, عقارات جدة',
      });
    }

}
