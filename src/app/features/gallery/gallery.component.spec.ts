import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { GalleryComponent } from './gallery.component';
import { GalleryService } from 'src/app/services/gallery/gallery.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FeaturesModule } from '../features.module';



describe('GalleryComponent',()=>{
    beforeEach(async(()=>{
      TestBed.configureTestingModule({
        imports:[
          RouterTestingModule,
          HttpClientTestingModule,
          FeaturesModule
        ],
        declarations:[
            GalleryComponent
        ],
        providers:[
            GalleryService,
        ]
      }).compileComponents();
    }));
    it('should create the app',()=>{
      const fixture = TestBed.createComponent(GalleryComponent);
      const component = fixture.debugElement.componentInstance;
      expect(component).toBeTruthy();
    });
  
    it('should call ngon init',()=>{
      const fixture = TestBed.createComponent(GalleryComponent);
      const component = fixture.debugElement.componentInstance;
      let spy_getGallery = spyOn(component,"getGallery").and.returnValue([]);
      component.ngOnInit();
      expect(component.getGallery()).toEqual([]);
    })
  })


// describe('GalleryComponent', () => {
//   let component: GalleryComponent;
//   let fixture: ComponentFixture<GalleryComponent>;

//   beforeEach(async () => {
//     var galleryServiceSpy=jasmine.createSpyObj('GalleryService','getGallery');

//     await TestBed.configureTestingModule({
//       declarations: [ GalleryComponent ],
//       providers:[
//         {provide: GalleryService, useValue: galleryServiceSpy}
//       ]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(GalleryComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
