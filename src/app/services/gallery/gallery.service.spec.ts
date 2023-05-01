// // import { TestBed } from '@angular/core/testing';

// // import { GalleryService } from './gallery.service';

// // describe('GalleryService', () => {
// //   let service: GalleryService;

// //   beforeEach(() => {
// //     TestBed.configureTestingModule({});
// //     service = TestBed.inject(GalleryService);
// //   });

// //   it('should be created', () => {
// //     expect(service).toBeTruthy();
// //   });
// // });

// import { TestBed } from '@angular/core/testing';
// import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
// import { GalleryService } from './gallery.service';
// import { ApiMethod, AuthEndPoints } from 'src/app/core/constant/api-constant';

// describe('GalleryService', () => {
//   let service: GalleryService;
//   let httpMock: HttpTestingController;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [HttpClientTestingModule],
//       providers: [GalleryService,]
//     });
//     service = TestBed.inject(GalleryService);
//     httpMock = TestBed.inject(HttpTestingController);
//   });

//   afterEach(() => {
//     httpMock.verify();
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });

//   it('should retrieve gallery data from the API via GET', () => {
//     const lab_id = '6';
//     const dummyData = {
//       id: 1,
//       name: 'Test Image',
//       url: 'http://example.com/image.jpg'
//     };
//     service.getGallery(lab_id).subscribe((res) => {
//       expect(res).toEqual(dummyData);
//     });
//     const req = httpMock.expectOne(`${AuthEndPoints.GET_GALLERY}/${lab_id}`);
//     expect(req.request.method).toBe(ApiMethod.GET);
//     req.flush(dummyData);
//   });

//   it('should upload an image via POST', () => {
//     const file = new File([''], 'test.png', { type: 'image/png' });
//     service.uploadImage(file).subscribe((res) => {
//       expect(res).toBeTruthy();
//     });
//     const req = httpMock.expectOne(AuthEndPoints.UPLOAD_IMAGE);
//     expect(req.request.method).toBe(ApiMethod.POST);
//     expect(req.request.body instanceof FormData).toBeTruthy();
//     req.flush({});
//   });
// });

import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { GalleryService } from './gallery.service';
import { ApiMethod, AuthEndPoints } from 'src/app/core/constant/api-constant';
import { HttpService } from 'src/app/core/service/http/http.service';
import { ToastrModule, ToastrService, } from 'ngx-toastr';
import { environment } from 'src/environments/environment';

describe('GalleryService', () => {
  let service: GalleryService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ToastrModule.forRoot()],
      providers: [GalleryService, HttpService, ToastrService ],
    });
    service = TestBed.inject(GalleryService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should return gallery data', () => {
    const lab_id = '123';
    const mockResponse = { data: [{ id: 1, name: 'image1' }, { id: 2, name: 'image2' }] };
    service.getGallery(lab_id)?.subscribe((res) => {
      expect(res).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(`${environment.apiUrl}${AuthEndPoints.GET_GALLERY}${lab_id}`);
    
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });

  it('should upload image', () => {
    const lab_id = '123';
    const file = new File(['sample file content'], 'sample.jpg', { type: 'image/jpeg' });
    const mockResponse = { success: true };
    service.uploadImage(file)?.subscribe((res) => {
      expect(res).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(`${environment.apiUrl}${AuthEndPoints.UPLOAD_IMAGE}`);
    expect(req.request.method).toBe('POST');
    expect(req.request.body.get('file')).toEqual(file);
    req.flush(mockResponse);
  });
});

