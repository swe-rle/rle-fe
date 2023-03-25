import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfPublComponent } from './conf-publ.component';

describe('ConfPublComponent', () => {
  let component: ConfPublComponent;
  let fixture: ComponentFixture<ConfPublComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfPublComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfPublComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
