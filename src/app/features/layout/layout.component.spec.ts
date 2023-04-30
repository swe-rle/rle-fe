import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutComponent } from './layout.component';
import { LandingPageService } from 'src/app/services/landingpage/landing-page.service';

// describe('LayoutComponent', () => {
//   let component: LayoutComponent;
//   let fixture: ComponentFixture<LayoutComponent>;

//   beforeEach(async () => {
//     var landingPageServiceSpy=jasmine.createSpyObj('LandingPageService','getHeaderFooterDetails');

//     await TestBed.configureTestingModule({
//       declarations: [ LayoutComponent ],
//       providers:[
//         {provide: LandingPageService, useValue: landingPageServiceSpy}
//       ]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(LayoutComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
