
import {Routes} from '@angular/router';
import { HomeComponent } from './featured/home/home/home.component';

export const routes: Routes = [
    {path:"" ,redirectTo: "home" , pathMatch:"full"},
    {path:"home" , loadComponent:() => import('./featured/home/home/home.component').then((c) => c.HomeComponent) },
    {path:"about" , loadComponent:() => import('./featured/about/about.component').then((c) => c.AboutComponent)},
    {path:"services" , loadComponent:() => import('./featured/services/services.component').then((c) => c.ServicesComponent)},
    {path:"contact" , loadComponent:() => import('./featured/contact/contact.component').then((c) => c.ContactComponent)},
    {path:"projects" , loadComponent:() => import('./featured/projects/projects.component').then((c) => c.ProjectsComponent)},
    {path:"helm-101" , loadComponent:() => import('./featured/helm-101/helm-101.component').then((c) => c.Helm101Component)},
    {path:"helm-102" , loadComponent:() => import('./featured/helm-102/helm-102.component').then((c) => c.Helm102Component)},
    {path:"helm-103" , loadComponent:() => import('./featured/helm-103/helm-103.component').then((c) => c.Helm103Component)},
    {path:"helm-104" , loadComponent:() => import('./featured/helm-104/helm-104.component').then((c) => c.Helm104Component)},
    {path:"**" , component:HomeComponent}
];



