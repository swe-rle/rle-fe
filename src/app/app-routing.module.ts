import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';
import { ConfPublComponent } from './features/conf-publ/conf-publ.component';
import { GalleryComponent } from './features/gallery/gallery.component';
import { LabMembersComponent } from './features/lab-members/lab-members.component';
import { LandingPageComponent } from './features/landing-page/landing-page.component';
import { LayoutComponent } from './features/layout/layout.component';
import { LoginComponent } from './features/login/login.component';
import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';
import { AdminLandingPageComponent } from './admin/admin-landing-page/admin-landing-page.component';
import { AdminPublicationsComponent } from './admin/admin-publications/admin-publications.component';
import { AdminPeopleComponent } from './admin/admin-people/admin-people.component';
import { AdminGalleryComponent } from './admin/admin-gallery/admin-gallery.component';
import { AdminAdmissionsComponent } from './admin/admin-admissions/admin-admissions.component';
import { AdminConferencesComponent } from './admin/admin-conferences/admin-conferences.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'features/home/6',
    pathMatch: 'full'
  },
  {
    path: 'features',
  component: LayoutComponent,
  children: [
    {
      path:'home/:lab_id',
      component: LandingPageComponent,
    },
    {
        path:'research/:lab_id',
        component: ConfPublComponent
    },
    {
      path:'people/:lab_id',
      component:LabMembersComponent
    },
    {
      path:'login/:lab_id',
      component:LoginComponent
    },
    {
      path:'gallery/:lab_id',
      component:GalleryComponent
    },
    {
      path:'admin/home/:lab_id',
      component: AdminLandingPageComponent,
    },
    {
        path:'admin/research/publications/:lab_id',
        component: AdminPublicationsComponent
    },
    {
      path:'admin/research/conferences/:lab_id',
      component: AdminConferencesComponent
    },
    {
      path:'admin/people/:lab_id',
      component:AdminPeopleComponent
    },
    {
      path:'admin/gallery/:lab_id',
      component:AdminGalleryComponent
    },
    {
      path:'admin/admissions/:lab_id',
      component:AdminAdmissionsComponent
    }
  ]
  },
  {
    path: 'admin',
  component: AdminLayoutComponent,
  children: [
    {
      path:'home/:lab_id',
      component: AdminLandingPageComponent,
    },
    {
        path:'research/publications/:lab_id',
        component: AdminPublicationsComponent
    },
    {
      path:'research/conferences/:lab_id',
      component: AdminConferencesComponent
    },
    {
      path:'people/:lab_id',
      component:AdminPeopleComponent
    },
    {
      path:'gallery/:lab_id',
      component:AdminGalleryComponent
    },
    {
      path:'admissions/:lab_id',
      component:AdminAdmissionsComponent
    }
  ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled',useHash:true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
