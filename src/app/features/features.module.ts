import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LabMembersComponent } from './lab-members/lab-members.component';
import { ConfPublComponent } from './conf-publ/conf-publ.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { GalleryModule } from 'ng-gallery';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    LandingPageComponent,
    LabMembersComponent,
    ConfPublComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    GalleryModule,
    BrowserAnimationsModule
  ]
})
export class FeaturesModule { }
