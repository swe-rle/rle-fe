import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { PublicationsComponent } from './publications/publications.component';
import { ConferencesComponent } from './conferences/conferences.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PeopleComponent } from './people/people.component';
import { LandingPageComponent } from './landing-page/landing-page.component';



@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    PublicationsComponent,
    ConferencesComponent,
    GalleryComponent,
    PeopleComponent,
    LandingPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
