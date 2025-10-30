import { Routes } from '@angular/router';

// استيراد المكونات مباشرة
import { HomeComponent } from './featured/home/home/home.component';
import { AboutComponent } from './featured/about/about.component';
import { ServicesComponent } from './featured/services/services.component';
import { ProjectsComponent } from './featured/projects/projects.component';
import { ContactComponent } from './featured/contact/contact.component';
import { Helm101Component } from './featured/helm-101/helm-101.component';
import { Helm102Component } from './featured/helm-102/helm-102.component';
import { Helm103Component } from './featured/helm-103/helm-103.component';
import { Helm104Component } from './featured/helm-104/helm-104.component';
import { Helm105Component } from './featured/helm-105/helm-105.component';
import { Helm106Component } from './featured/helm-106/helm-106.component';

export const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "services", component: ServicesComponent },
  { path: "projects", component: ProjectsComponent },
  { path: "contact", component: ContactComponent },
  { path: "helm-101", component: Helm101Component },
  { path: "helm-102", component: Helm102Component },
  { path: "helm-103", component: Helm103Component },
  { path: "helm-104", component: Helm104Component },
  { path: "helm-105", component: Helm105Component },
  { path: "helm-106", component: Helm106Component },
  { path: "**", component: HomeComponent }
];
