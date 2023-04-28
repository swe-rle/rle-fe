import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { LandingPageService } from 'src/app/services/landingpage/landing-page.service';
declare var nav:any;

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent  implements OnInit{
  headerDetails:any
  footerDetails:any
  public lab_id:any
  isLoaded:boolean = false

  constructor(private landingPageService:LandingPageService,
    private route: ActivatedRoute) { }
    ngOnInit(): void {
      new nav()
      this.lab_id = this.route.snapshot.paramMap.get('lab_id');
      this.getHeaderFooterDetails(this.lab_id)
    }
  getHeaderFooterDetails(lab_id:any){
    this.landingPageService._landingPageDetails$.subscribe((res:any)=>{
      this.headerDetails = {
        "logo":res?.logo,
        "lab_name":res?.name,
        "lab_id":lab_id
      }
      this.footerDetails = {
        "contact_us":res?.contact_us,
        "lab_name":res?.name
    }
  });
    this.landingPageService.getLandingPageDetails(lab_id);
    this.isLoaded = true
  }
  
}
