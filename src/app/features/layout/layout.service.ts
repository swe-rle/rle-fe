import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiMethod, AuthEndPoints } from 'src/app/core/constant/api-constant';
import { HttpService } from 'src/app/core/service/http/http.service';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  public _landingPageDetails$: BehaviorSubject<any> = new BehaviorSubject<any>(
    null
  );
  constructor(private httpService:HttpService) { }
  public getHeaderFooterDetails(lab_id:any){
    return this.httpService.requestCall(
      ApiMethod.GET,
      AuthEndPoints.GET_LANDING_PAGE_DETAILS,
      '',
      lab_id      
    )?.subscribe((res) => {
      this._landingPageDetails$.next(res);
    });
  }

}
