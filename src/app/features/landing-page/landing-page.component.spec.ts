import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { LandingPageComponent } from './landing-page.component';
import { LandingPageService } from 'src/app/services/landingpage/landing-page.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FeaturesModule } from '../features.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GalleryModule } from 'ng-gallery';
import { ToastrModule } from 'ngx-toastr';
import { Observable, of } from 'rxjs';



class MockLandingPageService {
    getLandingPageDetails(lab_id:any): Observable<any> {
      return of({ id: 1, amogh: 'string' });
  }
  }


  describe('LandingPageComponent', () => {
    let component: LandingPageComponent;
    let fixture: ComponentFixture<LandingPageComponent>;
  
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ LandingPageComponent ],
        imports:[
          RouterTestingModule,
          ToastrModule.forRoot(),
          GalleryModule,
          FormsModule,
          ReactiveFormsModule
        ],
        providers:[{
          provide:LandingPageService,useClass:MockLandingPageService
        },
      ]
      })
      .compileComponents();
  
      fixture = TestBed.createComponent(LandingPageComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    
    });


    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });






// describe('LandingPageComponent',()=>{
//     beforeEach(async(()=>{
//       TestBed.configureTestingModule({
//         imports:[
//           RouterTestingModule,
//           HttpClientTestingModule,
//           FeaturesModule
//         ],
//         declarations:[
//             LandingPageComponent
//         ],
//         providers:[
//             LandingPageService,
//         ]
//       }).compileComponents();
//     }));
//     it('should create the app',()=>{
//       const fixture = TestBed.createComponent(LandingPageComponent);
//       const component = fixture.debugElement.componentInstance;
//       expect(component).toBeTruthy();
//     });
  
//     it('should call ngon init',()=>{
//       const fixture = TestBed.createComponent(LandingPageComponent);
//       const component = fixture.debugElement.componentInstance;
//       let spy_getLandingPageDetails = spyOn(component,"getLandingPageDetails").and.returnValue([]);
//       component.ngOnInit();
//       expect(component.getLandingPageDetails()).toEqual([]);
//     })
//   })




// describe('LandingPageComponent', () => {
//   let component: LandingPageComponent;
//   let fixture: ComponentFixture<LandingPageComponent>;

//   beforeEach(async () => {
//     var landingPageServiceSpy=jasmine.createSpyObj('LandingPageService','getLandingPageDetails');

//     await TestBed.configureTestingModule({

//       declarations: [ LandingPageComponent ],
//       providers:[
//         {provide: LandingPageService, useValue: landingPageServiceSpy}
//       ]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(LandingPageComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
