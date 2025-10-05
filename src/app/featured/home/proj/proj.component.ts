import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { RouterModule } from "@angular/router";
import { pipe } from 'rxjs';

@Component({
  selector: 'app-proj',
  standalone: true,
  imports: [RouterModule ],
  templateUrl: './proj.component.html',
  styleUrl: './proj.component.css'
})
export class ProjComponent {

}
