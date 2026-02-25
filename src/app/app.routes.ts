import { Routes } from '@angular/router';

// استيراد المكونات مباشرة
import { HomeComponent } from './featured/home/home/home.component';
import { AboutComponent } from './featured/about/about.component';
import { ServicesComponent } from './featured/services/services.component';
import { ProjectsComponent } from './featured/projects/projects.component';
import { ContactComponent } from './featured/contact/contact.component';
import { ProjectDetilsComponent } from './featured/project-detils/project-detils.component';


export const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "services", component: ServicesComponent },
  { path: 'projects', component: ProjectsComponent },      
  { path: 'projects/:city', component: ProjectsComponent } ,
  { path: "contact", component: ContactComponent },
  { path: "project/:id", component: ProjectDetilsComponent },

  { path: "**", component: HomeComponent }
];
