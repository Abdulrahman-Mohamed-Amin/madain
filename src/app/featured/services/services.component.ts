import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { FooterComponent } from "../../shared/footer/footer.component";
import { MetaService } from '../../core/meta.service';
import { ServComponent } from "../home/serv/serv.component";
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, ServComponent , TranslateModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

    constructor(private meta: MetaService) {
      this.meta.updateTags({
        title: 'مدائن العقارية | خدمتنا',
        description:
          'مدائن العقارية شركة سعودية متخصصة في تطوير وتسويق العقارات السكنية تقدم شقق تمليك حديثة في جدة ومكة بمعايير جودة عالية .',
        url: 'https://madain.sa/services',
        keywords:
          'عقارات, شركة مدائن العقارية, شقق تمليك جدة, فلل للبيع, مشاريع سكنية, شراء شقق, عقارات جدة',
      });
    }
}
