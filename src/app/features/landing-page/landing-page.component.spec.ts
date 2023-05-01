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
import { By } from '@angular/platform-browser';



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

    // it('should display the landing page name and overview', () => {
    //   const nameElement = fixture.debugElement.query(By.css('#labname'));
    //   const overviewElement = fixture.debugElement.query(By.css('#laboverview'));
    //   expect(nameElement).toContain(component.landingPageDetails.name);
    //   expect(overviewElement).toContain(component.landingPageDetails.overview);
    // });
  
    // it('should display the cover image', () => {
    //   const imageElement = fixture.debugElement.query(By.css('img'));
    //   expect(imageElement).toBeTruthy();
    //   expect(imageElement.nativeElement.src).toContain(component.landingPageDetails.cover_url?.blob_storage);
    // });
  
    // it('should display the events list', () => {
    //   component.eventsList = [
    //     { title: 'Event 1', description: 'Event 1 description', url: 'event1.jpg' },
    //     { title: 'Event 2', description: 'Event 2 description', url: 'event2.jpg' }
    //   ];
    //   fixture.detectChanges();
  
    //   const titleElements = fixture.debugElement.queryAll(By.css('h4'));
    //   const descriptionElements = fixture.debugElement.queryAll(By.css('p'));
    //   const imageElements = fixture.debugElement.queryAll(By.css('img'));
    //   expect(titleElements.length).toBe(2);
    //   expect(titleElements[0].nativeElement.textContent).toContain(component.eventsList[0].title);
    //   expect(descriptionElements.length).toBe(2);
    //   expect(descriptionElements[0].nativeElement.textContent).toContain(component.eventsList[0].description);
    //   expect(imageElements.length).toBe(2);
    //   expect(imageElements[0].nativeElement.src).toContain(component.eventsList[0].url);
    // });
  
    // it('should display a message if there are no events', () => {
    //   component.isEventsEmpty = true;
    //   fixture.detectChanges();
  
    //   const messageElement = fixture.debugElement.query(By.css('p'));
    //   expect(messageElement.nativeElement.textContent).toContain('There are no currents events scheduled');
    // });
  
    // it('should display the news list', () => {
    //   component.news = [
    //     { pub_title: 'News 1', description: 'News 1 description' },
    //     { pub_title: 'News 2', description: 'News 2 description' }
    //   ];
    //   fixture.detectChanges();
  
    //   const titleElements = fixture.debugElement.queryAll(By.css('h4'));
    //   const descriptionElements = fixture.debugElement.queryAll(By.css('p'));
    //   const linkElements = fixture.debugElement.queryAll(By.css('a'));
    //   expect(titleElements.length).toBe(2);
    //   expect(titleElements[0].nativeElement.textContent).toContain(component.news[0].pub_title);
    //   expect(descriptionElements.length).toBe(2);
    //   expect(descriptionElements[0].nativeElement.textContent).toContain(component.news[0].description);
    //   expect(linkElements.length).toBe(2);
    //   expect(linkElements[0].nativeElement.href).toContain('/research/publications');
    // });
  });
  






// // describe('LandingPageComponent',()=>{
// //     beforeEach(async(()=>{
// //       TestBed.configureTestingModule({
// //         imports:[
// //           RouterTestingModule,
// //           HttpClientTestingModule,
// //           FeaturesModule
// //         ],
// //         declarations:[
// //             LandingPageComponent
// //         ],
// //         providers:[
// //             LandingPageService,
// //         ]
// //       }).compileComponents();
// //     }));
// //     it('should create the app',()=>{
// //       const fixture = TestBed.createComponent(LandingPageComponent);
// //       const component = fixture.debugElement.componentInstance;
// //       expect(component).toBeTruthy();
// //     });
  
// //     it('should call ngon init',()=>{
// //       const fixture = TestBed.createComponent(LandingPageComponent);
// //       const component = fixture.debugElement.componentInstance;
// //       let spy_getLandingPageDetails = spyOn(component,"getLandingPageDetails").and.returnValue([]);
// //       component.ngOnInit();
// //       expect(component.getLandingPageDetails()).toEqual([]);
// //     })
// //   })




// // describe('LandingPageComponent', () => {
// //   let component: LandingPageComponent;
// //   let fixture: ComponentFixture<LandingPageComponent>;

// //   beforeEach(async () => {
// //     var landingPageServiceSpy=jasmine.createSpyObj('LandingPageService','getLandingPageDetails');

// //     await TestBed.configureTestingModule({

// //       declarations: [ LandingPageComponent ],
// //       providers:[
// //         {provide: LandingPageService, useValue: landingPageServiceSpy}
// //       ]
// //     })
// //     .compileComponents();

// //     fixture = TestBed.createComponent(LandingPageComponent);
// //     component = fixture.componentInstance;
// //     fixture.detectChanges();
// //   });

// //   it('should create', () => {
// //     expect(component).toBeTruthy();
// //   });
// // });


// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { By } from '@angular/platform-browser';
// import { LandingPageComponent } from './landing-page.component';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { RouterTestingModule } from '@angular/router/testing';
// import { GalleryModule } from 'ng-gallery';
// import { ToastrModule } from 'ngx-toastr';
// import { LandingPageService } from 'src/app/services/landingpage/landing-page.service';
// import { HttpClientTestingModule } from '@angular/common/http/testing';
// import { ActivatedRoute } from '@angular/router';

// describe('LandingPageComponent', () => {
//   let component: LandingPageComponent;
//   let fixture: ComponentFixture<LandingPageComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//         imports:[
//           RouterTestingModule,
//           ToastrModule.forRoot(),
//           GalleryModule,
//           FormsModule,
//           ReactiveFormsModule,
//           HttpClientTestingModule
//         ],
//         providers:[
//           {provide:LandingPageService}
//         ],
//       declarations: [ LandingPageComponent ]
//     })
//     .compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(LandingPageComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should display the landing page name and overview', () => {
//     const nameElement = fixture.debugElement.query(By.css('h1')).nativeElement;
//     const overviewElement = fixture.debugElement.query(By.css('h2')).nativeElement;
//     expect(nameElement.textContent).toContain(component.landingPageDetails.name);
//     expect(overviewElement.textContent).toContain(component.landingPageDetails.overview);
//   });

//   it('should display the cover image', () => {
//     const imageElement = fixture.debugElement.query(By.css('img'));
//     expect(imageElement).toBeTruthy();
//     expect(imageElement.nativeElement.src).toContain(component.landingPageDetails.cover_url?.blob_storage);
//   });

//   it('should display the events list', () => {
//     component.eventsList = [
//       { title: 'Event 1', description: 'Event 1 description', url: 'event1.jpg' },
//       { title: 'Event 2', description: 'Event 2 description', url: 'event2.jpg' }
//     ];
//     fixture.detectChanges();

//     const titleElements = fixture.debugElement.queryAll(By.css('h4'));
//     const descriptionElements = fixture.debugElement.queryAll(By.css('p'));
//     const imageElements = fixture.debugElement.queryAll(By.css('img'));
//     expect(titleElements.length).toBe(2);
//     expect(titleElements[0].nativeElement.textContent).toContain(component.eventsList[0].title);
//     expect(descriptionElements.length).toBe(2);
//     expect(descriptionElements[0].nativeElement.textContent).toContain(component.eventsList[0].description);
//     expect(imageElements.length).toBe(2);
//     expect(imageElements[0].nativeElement.src).toContain(component.eventsList[0].url);
//   });

//   it('should display a message if there are no events', () => {
//     component.isEventsEmpty = true;
//     fixture.detectChanges();

//     const messageElement = fixture.debugElement.query(By.css('p'));
//     expect(messageElement.nativeElement.textContent).toContain('There are no currents events scheduled');
//   });

//   it('should display the news list', () => {
//     component.news = [
//       { pub_title: 'News 1', description: 'News 1 description' },
//       { pub_title: 'News 2', description: 'News 2 description' }
//     ];
//     fixture.detectChanges();

//     const titleElements = fixture.debugElement.queryAll(By.css('h4'));
//     const descriptionElements = fixture.debugElement.queryAll(By.css('p'));
//     const linkElements = fixture.debugElement.queryAll(By.css('a'));
//     expect(titleElements.length).toBe(2);
//     expect(titleElements[0].nativeElement.textContent).toContain(component.news[0].pub_title);
//     expect(descriptionElements.length).toBe(2);
//     expect(descriptionElements[0].nativeElement.textContent).toContain(component.news[0].description);
//     expect(linkElements.length).toBe(2);
//     expect(linkElements[0].nativeElement.href).toContain('/research/publications');
//   });
// });

