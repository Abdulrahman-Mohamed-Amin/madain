import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../../shared/header/header.component";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [HeaderComponent, RouterLink],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent implements OnInit{
  img:number = 1

  ngOnInit(): void {

    
  }

}
