import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../../shared/header/header.component";

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent implements OnInit{
  img:number = 1

  ngOnInit(): void {

    
  }

}
