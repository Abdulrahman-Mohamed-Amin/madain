import { Component } from '@angular/core';
import { LandingComponent } from "../landing/landing.component";
import { OverviewComponent } from "../overview/overview.component";
import { ProjectsComponent } from "../../projects/projects.component";
import { ServComponent } from "../serv/serv.component";
import { QemnaComponent } from "../qemna/qemna.component";
import { VesionComponent } from "../vesion/vesion.component";
import { FooterComponent } from "../../../shared/footer/footer.component";
import { MadainComponent } from "../madain/madain.component";
import { ProjComponent } from "../proj/proj.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LandingComponent, OverviewComponent, ProjectsComponent, ServComponent, QemnaComponent, VesionComponent, FooterComponent, MadainComponent, ProjComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
