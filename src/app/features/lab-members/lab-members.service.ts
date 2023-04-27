import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiMethod, AuthEndPoints } from 'src/app/core/constant/api-constant';
import { HttpService } from 'src/app/core/service/http/http.service';

@Injectable({
  providedIn: 'root'
})
export class LabMembersService {
  public _labMemberDetails$: BehaviorSubject<any> = new BehaviorSubject<any>(
    null
  );
  constructor(private httpService: HttpService) { }

  public getAllLabMembers(lab_id:any){
    return this.httpService.requestCall(
      ApiMethod.GET,
      AuthEndPoints.GET_PERSON_DETAILS,
      '',
      lab_id      
    )?.subscribe((res) => {
      this._labMemberDetails$.next(res);
    });
  }
}
