import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { LabMembersComponent } from './lab-members.component';
import { PeopleService } from 'src/app/services/people/people.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FeaturesModule } from '../features.module';


describe('LabMembersComponent',()=>{
    beforeEach(async(()=>{
      TestBed.configureTestingModule({
        imports:[
          RouterTestingModule,
          HttpClientTestingModule,
          FeaturesModule
        ],
        declarations:[
            LabMembersComponent
        ],
        providers:[
            PeopleService,
        ]
      }).compileComponents();
    }));
    it('should create the app',()=>{
      const fixture = TestBed.createComponent(LabMembersComponent);
      const component = fixture.debugElement.componentInstance;
      expect(component).toBeTruthy();
    });
  
    it('should call ngon init',()=>{
      const fixture = TestBed.createComponent(LabMembersComponent);
      const component = fixture.debugElement.componentInstance;
      let spy_getAllLabMemberDetails = spyOn(component,"getAllLabMemberDetails").and.returnValue([]);
      component.ngOnInit();
      expect(component.getAllLabMemberDetails()).toEqual([]);
    })
  })



// describe('LabMembersComponent', () => {
//   let component: LabMembersComponent;
//   let fixture: ComponentFixture<LabMembersComponent>;

//   beforeEach(async () => {
//     var peopleServiceSpy=jasmine.createSpyObj('PeopleService','getAllLabMemberDetails');

//     await TestBed.configureTestingModule({
//       declarations: [ LabMembersComponent ],
//       providers:[
//         {provide: PeopleService, useValue: peopleServiceSpy}
//       ]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(LabMembersComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
