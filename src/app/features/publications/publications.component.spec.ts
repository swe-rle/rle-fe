import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { PublicationsComponent } from './publications.component';
import { FeaturesModule } from '../features.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ResearchService } from 'src/app/services/research/research.service';


describe('PublicationsComponent',()=>{
    beforeEach(async(()=>{
      TestBed.configureTestingModule({
        imports:[
          RouterTestingModule,
          HttpClientTestingModule,
          FeaturesModule
        ],
        declarations:[
            PublicationsComponent
        ],
        providers:[
            ResearchService,
        ]
      }).compileComponents();
    }));
    it('should create the app',()=>{
      const fixture = TestBed.createComponent(PublicationsComponent);
      const component = fixture.debugElement.componentInstance;
      expect(component).toBeTruthy();
    });
  
    it('should call ngon init',()=>{
      const fixture = TestBed.createComponent(PublicationsComponent);
      const component = fixture.debugElement.componentInstance;
      let spy_getAllPublications = spyOn(component,"getAllPublications").and.returnValue([]);
      component.ngOnInit();
      expect(component.getAllPublications()).toEqual([]);
    })
  })

