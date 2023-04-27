import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminConferencesComponent } from './admin-conferences.component';

describe('AdminConferencesComponent', () => {
  let component: AdminConferencesComponent;
  let fixture: ComponentFixture<AdminConferencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminConferencesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminConferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
