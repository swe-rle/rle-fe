// import { ComponentFixture, TestBed, async } from '@angular/core/testing';

// import { GalleryComponent } from './gallery.component';
// import { GalleryService } from 'src/app/services/gallery/gallery.service';
// import { HttpClientTestingModule } from '@angular/common/http/testing';
// import { RouterTestingModule } from '@angular/router/testing';
// import { FeaturesModule } from '../features.module';



// describe('GalleryComponent',()=>{
//     beforeEach(async(()=>{
//       TestBed.configureTestingModule({
//         imports:[
//           RouterTestingModule,
//           HttpClientTestingModule,
//           FeaturesModule
//         ],
//         declarations:[
//             GalleryComponent
//         ],
//         providers:[
//             GalleryService,
//         ]
//       }).compileComponents();
//     }));
//     it('should create the app',()=>{
//       const fixture = TestBed.createComponent(GalleryComponent);
//       const component = fixture.debugElement.componentInstance;
//       expect(component).toBeTruthy();
//     });
  
//     it('should call ngon init',()=>{
//       const fixture = TestBed.createComponent(GalleryComponent);
//       const component = fixture.debugElement.componentInstance;
//       let spy_getGallery = spyOn(component,"getGallery").and.returnValue([]);
//       component.ngOnInit();
//       expect(component.getGallery()).toEqual([]);
//     })
//   })


// // describe('GalleryComponent', () => {
// //   let component: GalleryComponent;
// //   let fixture: ComponentFixture<GalleryComponent>;

// //   beforeEach(async () => {
// //     var galleryServiceSpy=jasmine.createSpyObj('GalleryService','getGallery');

// //     await TestBed.configureTestingModule({
// //       declarations: [ GalleryComponent ],
// //       providers:[
// //         {provide: GalleryService, useValue: galleryServiceSpy}
// //       ]
// //     })
// //     .compileComponents();

// //     fixture = TestBed.createComponent(GalleryComponent);
// //     component = fixture.componentInstance;
// //     fixture.detectChanges();
// //   });

// //   it('should create', () => {
// //     expect(component).toBeTruthy();
// //   });
// // });

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { GalleryComponent } from './gallery.component';
import { GalleryConfig, GalleryItem, GalleryModule, ImageItem } from 'ng-gallery';
import { GalleryService } from 'src/app/services/gallery/gallery.service';
import { of } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FeaturesModule } from '../features.module';

describe('GalleryComponent', () => {
  let component: GalleryComponent;
  let fixture: ComponentFixture<GalleryComponent>;
  let galleryServiceSpy: jasmine.SpyObj<GalleryService>;

  const galleryMockData = [
    { 
      title: 'Gallery 1', 
      description: 'Description for Gallery 1', 
      images: [
        { url: 'https://example.com/image1.jpg' },
        { url: 'https://example.com/image2.jpg' },
        { url: 'https://example.com/image3.jpg' }
      ]
    },
    {
      title: 'Gallery 2',
      description: 'Description for Gallery 2',
      images: [
        { url: 'https://example.com/image4.jpg' },
        { url: 'https://example.com/image5.jpg' },
        { url: 'https://example.com/image6.jpg' }
      ]
    }
  ];

  beforeEach(async () => {
    const activatedRouteMock = {
      parent: {
        snapshot: {
          paramMap: {
            get: () => 'lab_id'
          }
        }
      }
    };
    galleryServiceSpy = jasmine.createSpyObj('GalleryService', ['getGallery']);
    galleryServiceSpy.getGallery.and.returnValue(of(galleryMockData));

    await TestBed.configureTestingModule({
        imports:[
          GalleryModule,
          BrowserAnimationsModule,
          RouterTestingModule,
          HttpClientTestingModule,
          FeaturesModule
        ],
      declarations: [GalleryComponent],
      providers: [
        { provide: GalleryService, useValue: galleryServiceSpy },
        { provide: ActivatedRoute, useValue: activatedRouteMock }
        
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get gallery data on init', () => {
    expect(galleryServiceSpy.getGallery).toHaveBeenCalledWith('lab_id');
    expect(component.gallery).toEqual(galleryMockData);
  });

  it('should convert gallery data to gallery items', () => {
    expect(component.galleryList.length).toBe(2);
    expect(component.galleryList[0].length).toBe(3);
    expect(component.galleryList[1].length).toBe(3);

    const expectedImages: GalleryItem[] = [
      new ImageItem({ src: 'https://example.com/image1.jpg' }),
      new ImageItem({ src: 'https://example.com/image2.jpg' }),
      new ImageItem({ src: 'https://example.com/image3.jpg' })
    ];

    expect(component.galleryList[0]).toEqual(expectedImages);
  });

  it('should render gallery titles and descriptions', () => {
    const titleElements = fixture.nativeElement.querySelectorAll('h3');
    expect(titleElements.length).toBe(2);
    expect(titleElements[0].textContent).toBe('Gallery 1');
    expect(titleElements[1].textContent).toBe('Gallery 2');

    const descElements = fixture.nativeElement.querySelectorAll('h6');
    expect(descElements.length).toBe(2);
    expect(descElements[0].textContent).toBe('Description for Gallery 1');
    expect(descElements[1].textContent).toBe('Description for Gallery 2');
  });


});