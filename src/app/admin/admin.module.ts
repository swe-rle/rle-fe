import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { AdminHeaderComponent } from './admin-layout/admin-header/admin-header.component';
import { AdminFooterComponent } from './admin-layout/admin-footer/admin-footer.component';
import { AdminPeopleComponent } from './admin-people/admin-people.component';
import { AdminPublicationsComponent } from './admin-publications/admin-publications.component';
import { AdminLandingPageComponent } from './admin-landing-page/admin-landing-page.component';



@NgModule({
  declarations: [
   AdminFooterComponent,
   AdminHeaderComponent,
   AdminLayoutComponent,
   AdminPeopleComponent,
   AdminPublicationsComponent,
   AdminLandingPageComponent
  ],
  imports: [
    CommonModule,
    CKEditorModule
  ],
  exports:[]
})
export class AdminModule { }
