import { ComponentFixture, TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { AdminLandingPageComponent } from './admin-landing-page.component';
import { LandingPageService } from 'src/app/services/landingpage/landing-page.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AdminModule } from '../admin.module';
import { Observable, delay, of } from 'rxjs';
import { ToastrModule } from 'ngx-toastr';
import { GalleryModule } from 'ng-gallery';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

  class MockLandingPageService {
    getLandingPageDetails(lab_id:any): Observable<any> {
      return of({ id: 1, amogh: 'string' });
  }
  }


  describe('AdminLandingPageComponent', () => {
    let component: AdminLandingPageComponent;
    let fixture: ComponentFixture<AdminLandingPageComponent>;
  
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ AdminLandingPageComponent ],
        imports:[
          RouterTestingModule,
          ToastrModule.forRoot(),
          GalleryModule,
          FormsModule,
          ReactiveFormsModule,
          HttpClientTestingModule
        ],
        providers:[{
          provide:LandingPageService,useClass:MockLandingPageService
        },
      ]
      })
      .compileComponents();
  
      fixture = TestBed.createComponent(AdminLandingPageComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    
    });


    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });


