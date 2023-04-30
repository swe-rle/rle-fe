import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { RouterTestingModule } from '@angular/router/testing';
import { SocialAuthService, SocialLoginModule } from '@abacritt/angularx-social-login';
import { AuthService } from 'src/app/services/auth/auth.service';

// describe('HeaderComponent', () => {
//   let component: HeaderComponent;
//   let fixture: ComponentFixture<HeaderComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ HeaderComponent ]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(HeaderComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });


// describe('HeaderComponent', () => {
//     let component: HeaderComponent;
//     let fixture: ComponentFixture<HeaderComponent>;
  
//     beforeEach(async () => {
//       await TestBed.configureTestingModule({
//         declarations: [ HeaderComponent ],
//         imports: [ 
//           RouterTestingModule,
//           SocialLoginModule
  
//         ],
//         providers: [
//             AuthService,
//             SocialAuthService,
//             {
//               provide: SocialAuthServiceConfig,
//               useValue: {
//                 autoLogin: false,
//                 providers: []
//               }
//             }
//           ]
      
//       })
//       .compileComponents();
  
//       fixture = TestBed.createComponent(HeaderComponent);
//       component = fixture.componentInstance;
//       fixture.detectChanges();
//     });
  
//     it('should create', () => {
//       expect(component).toBeTruthy();
//     });
//   });
  