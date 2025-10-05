import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { FooterComponent } from "../../shared/footer/footer.component";

@Component({
  selector: 'app-helm-101',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './helm-101.component.html',
  styleUrl: './helm-101.component.css'
})
export class Helm101Component {

}
