import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLabComponent } from './admin-lab.component';

describe('AdminLabComponent', () => {
  let component: AdminLabComponent;
  let fixture: ComponentFixture<AdminLabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminLabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
