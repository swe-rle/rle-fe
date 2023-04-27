import { Component, OnInit } from '@angular/core';
import { LayoutService } from './layout.service';
import { GlobalLabId } from 'src/app/core/constant/global-id';
declare var nav:any;

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent  implements OnInit{
  headerDetails:any
  footerDetails:any
  ngOnInit(): void {
    new nav()
    this.getAllHeaderFooterDetails(GlobalLabId.LABID);
  }
  constructor(private layoutService:LayoutService) { }
  getAllHeaderFooterDetails(lab_id:any){
    this.layoutService._landingPageDetails$.subscribe((res)=>{
      console.log(res);
      this.headerDetails = {
        "labName" : res?.Name,
        "logo":res?.logo
      }
      this.footerDetails = {
        "labName" : res?.Name,
        "contactUs":res?.ContactUs,
      };
    });
    this.layoutService.getHeaderFooterDetails(lab_id);
  } 
}
