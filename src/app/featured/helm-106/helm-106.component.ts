import { Component } from '@angular/core';
import { FooterComponent } from "../../shared/footer/footer.component";
import { HeaderComponent } from "../../shared/header/header.component";
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-helm-106',
  standalone: true,
  imports: [FooterComponent, HeaderComponent , TranslateModule],
  templateUrl: './helm-106.component.html',
  styleUrl: './helm-106.component.css'
})
export class Helm106Component {

}
