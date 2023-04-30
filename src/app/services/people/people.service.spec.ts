import { TestBed } from '@angular/core/testing';

import { PeopleService } from './people.service';
import { HttpService } from 'src/app/core/service/http/http.service';

// describe('PeopleService', () => {
//   let service: PeopleService;

//   beforeEach(() => {
//     var httpServiceSpy=jasmine.createSpyObj('HttpService','getAllPeople','getProfile');
    
//     TestBed.configureTestingModule({
//       declarations:[PeopleService],
//       providers:[
//         {provide: HttpService, useValue: httpServiceSpy}
//       ]
//     });
//     service = TestBed.inject(PeopleService);


//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });
