import { Component } from '@angular/core';

import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { MetaService } from '../../core/meta.service';
import { ProjComponent } from "../home/proj/proj.component";
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RouterModule, HeaderComponent, FooterComponent, ProjComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  constructor(private meta: MetaService) {
    this.meta.updateTags({
      title: 'مدائن العقارية | مشاريعنا',
      description:
        'مدائن العقارية شركة سعودية متخصصة في تطوير وتسويق العقارات السكنية تقدم شقق تمليك حديثة في جدة ومكة بمعايير جودة عالية .',
      url: 'https://madain.sa/projects',
      keywords:
        'عقارات, شركة مدائن العقارية, شقق تمليك جدة, فلل للبيع, مشاريع سكنية, شراء شقق, عقارات جدة',
    });
  }
}
