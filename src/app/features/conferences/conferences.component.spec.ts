import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { ConferencesComponent } from './conferences.component';
import { ResearchService } from 'src/app/services/research/research.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FeaturesModule } from '../features.module';


describe('ConferencesComponent',()=>{
    beforeEach(async(()=>{
      TestBed.configureTestingModule({
        imports:[
          RouterTestingModule,
          HttpClientTestingModule,
          FeaturesModule
        ],
        declarations:[
            ConferencesComponent
        ],
        providers:[
            ResearchService,
        ]
      }).compileComponents();
    }));
    it('should create the app',()=>{
      const fixture = TestBed.createComponent(ConferencesComponent);
      const component = fixture.debugElement.componentInstance;
      expect(component).toBeTruthy();
    });
  
    it('should call ngon init',()=>{
      const fixture = TestBed.createComponent(ConferencesComponent);
      const component = fixture.debugElement.componentInstance;
      let spy_getAllConferences = spyOn(component,"getAllConferences").and.returnValue([]);
      component.ngOnInit();
      expect(component.getAllConferences()).toEqual([]);
    })
  })
