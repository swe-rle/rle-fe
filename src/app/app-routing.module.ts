import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';
import { ConfPublComponent } from './features/conf-publ/conf-publ.component';
import { GalleryComponent } from './features/gallery/gallery.component';
import { LabMembersComponent } from './features/lab-members/lab-members.component';
import { LandingPageComponent } from './features/landing-page/landing-page.component';
import { LayoutComponent } from './features/layout/layout.component';
import { LoginComponent } from './features/login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: '',
  component: LayoutComponent,
  children: [
    {
      path:'home',
      component: LandingPageComponent,
    },
    {
        path:'research',
        component: ConfPublComponent
    },
    {
      path:'people',
      component:LabMembersComponent
    },
    {
      path:'login',
      component:LoginComponent
    },
    {
      path:'gallery',
      component:GalleryComponent
    }
  ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled',useHash:true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
