import { ComponentFixture, TestBed, async, fakeAsync, tick } from '@angular/core/testing';

import { ConfPublComponent } from './conf-publ.component';
import { ResearchService } from 'src/app/services/research/research.service';
import { FeaturesModule } from '../features.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';




// describe('ConfPublComponent',()=>{
//     beforeEach(async(()=>{
//       TestBed.configureTestingModule({
//         imports:[
//           RouterTestingModule,
//           HttpClientTestingModule,
//           FeaturesModule
//         ],
//         declarations:[
//             ConfPublComponent
//         ],
//         providers:[
//             ResearchService,
//         ]
//       }).compileComponents();
//     }));
//     it('should create the app',()=>{
//       const fixture = TestBed.createComponent(ConfPublComponent);
//       const component = fixture.debugElement.componentInstance;
//       expect(component).toBeTruthy();
//     });
  
//     it('should call ngon init',()=>{
//       const fixture = TestBed.createComponent(ConfPublComponent);
//       const component = fixture.debugElement.componentInstance;
//       let spy_getResearchDetails = spyOn(component,"getResearchDetails").and.returnValue([]);
//       component.ngOnInit();
//       expect(component.getResearchDetails()).toEqual([]);
//     })
//   })
describe('ConfPublComponent', () => {
  let component: ConfPublComponent;
  let fixture: ComponentFixture<ConfPublComponent>;
  const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfPublComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display recent publications', () => {
    component.recentPublications = [
      { pub_date: '2022-01-01', pub_title: 'Title 1', description: 'Description 1', blob_storage: 'pdf1.pdf' },
      { pub_date: '2022-02-02', pub_title: 'Title 2', description: 'Description 2', blob_storage: 'pdf2.pdf' }
    ];
    fixture.detectChanges();
    const timelineRows = fixture.debugElement.queryAll(By.css('.timeline-row'));
    expect(timelineRows.length).toBe(2);
    const firstRowTime = timelineRows[0].query(By.css('.timeline-time')).nativeElement.textContent.trim();
    expect(firstRowTime).toBe('2022-01-01');
    const firstRowTitle = timelineRows[0].query(By.css('h4')).nativeElement.textContent.trim();
    expect(firstRowTitle).toBe('Title 1');
    const firstRowDescription = timelineRows[0].query(By.css('p')).nativeElement.textContent.trim();
    expect(firstRowDescription).toBe('Description 1');
  });

  it('should display upcoming conferences', () => {
    component.upcomingConferences = [
      { end_date: '2022-03-03', conf_title: 'Conf Title 1', description: 'Conf Description 1', blob_storage: 'conf1.pdf' },
      { end_date: '2022-04-04', conf_title: 'Conf Title 2', description: 'Conf Description 2', blob_storage: 'conf2.pdf' }
    ];
    fixture.detectChanges();
    const timelineRows = fixture.debugElement.queryAll(By.css('.timeline-row'));
    expect(timelineRows.length).toBe(2);
    const firstRowTime = timelineRows[0].query(By.css('.timeline-time')).nativeElement.textContent.trim();
    expect(firstRowTime).toBe('2022-03-03');
    const firstRowTitle = timelineRows[0].query(By.css('h4')).nativeElement.textContent.trim();
    expect(firstRowTitle).toBe('Conf Title 1');
    const firstRowDescription = timelineRows[0].query(By.css('p')).nativeElement.textContent.trim();
    expect(firstRowDescription).toBe('Conf Description 1');
  });

  it('should open PDF in new window', () => {
    spyOn(window, 'open');
    const button = fixture.debugElement.query(By.css('button')).nativeElement;
    button.click();
    expect(window.open).toHaveBeenCalledOnceWith('pdf1.pdf', '_blank');
  });

  // it('should navigate to link', () => {
  //   spyOn(component.router, 'navigateByUrl');
  //   const button = fixture.debugElement.query(By.css('button')).nativeElement;
  //   button.click();
  //   expect(component.router.navigateByUrl).toHaveBeenCalledOnceWith('../research/publications');
  // });
  it('should tell ROUTER to navigate when button clicked', fakeAsync(() => {
    let router = fixture.debugElement.injector.get(Router);
    const button = fixture.debugElement.query(By.css('button')).nativeElement;
      button.click();
    tick();
    const spy = router.navigateByUrl as jasmine.Spy;
    const navArgs = spy.calls.first().args[0];
    expect(navArgs).withContext('should nav to ViewDetailComponent for book detail')
      .toBe('/research/publications');
  }));
});
 
