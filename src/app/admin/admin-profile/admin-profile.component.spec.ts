import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { AdminProfileComponent } from './admin-profile.component';
import { PeopleService } from 'src/app/services/people/people.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AdminModule } from '../admin.module';


describe('AdminProfileComponent',()=>{
    beforeEach(async(()=>{
      TestBed.configureTestingModule({
        imports:[
          RouterTestingModule,
          HttpClientTestingModule,
          AdminModule
        ],
        declarations:[
            AdminProfileComponent
        ],
        providers:[
          PeopleService,
        ]
      }).compileComponents();
    }));
    it('should create the app',()=>{
      const fixture = TestBed.createComponent(AdminProfileComponent);
      const component = fixture.debugElement.componentInstance;
      expect(component).toBeTruthy();
    });
  
    // it('should call ngon init',()=>{
    //   const fixture = TestBed.createComponent(AdminProfileComponent);
    //   const component = fixture.debugElement.componentInstance;
    //   let spy_getProfileData = spyOn(component,"getProfileData").and.returnValue([]);
    //   component.ngOnInit();
    //   expect(component.getProfileData()).toEqual([]);
    // })
  })