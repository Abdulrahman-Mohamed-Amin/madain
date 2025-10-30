import { Component } from '@angular/core';
import { FooterComponent } from "../../shared/footer/footer.component";
import { HeaderComponent } from "../../shared/header/header.component";
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-helm-105',
  standalone: true,
  imports: [FooterComponent, HeaderComponent , TranslateModule],
  templateUrl: './helm-105.component.html',
  styleUrl: './helm-105.component.css'
})
export class Helm105Component {

}
