import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { ConfPublComponent } from './conf-publ.component';
import { ResearchService } from 'src/app/services/research/research.service';
import { FeaturesModule } from '../features.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';




describe('ConfPublComponent',()=>{
    beforeEach(async(()=>{
      TestBed.configureTestingModule({
        imports:[
          RouterTestingModule,
          HttpClientTestingModule,
          FeaturesModule
        ],
        declarations:[
            ConfPublComponent
        ],
        providers:[
            ResearchService,
        ]
      }).compileComponents();
    }));
    it('should create the app',()=>{
      const fixture = TestBed.createComponent(ConfPublComponent);
      const component = fixture.debugElement.componentInstance;
      expect(component).toBeTruthy();
    });
  
    it('should call ngon init',()=>{
      const fixture = TestBed.createComponent(ConfPublComponent);
      const component = fixture.debugElement.componentInstance;
      let spy_getResearchDetails = spyOn(component,"getResearchDetails").and.returnValue([]);
      component.ngOnInit();
      expect(component.getResearchDetails()).toEqual([]);
    })
  })
 
