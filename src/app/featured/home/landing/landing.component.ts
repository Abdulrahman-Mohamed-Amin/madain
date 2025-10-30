import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../../shared/header/header.component";
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [HeaderComponent , TranslateModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent implements OnInit{
  img:number = 1

  ngOnInit(): void {

    
  }

}
