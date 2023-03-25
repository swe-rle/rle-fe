import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabMembersComponent } from './lab-members.component';

describe('LabMembersComponent', () => {
  let component: LabMembersComponent;
  let fixture: ComponentFixture<LabMembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabMembersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
