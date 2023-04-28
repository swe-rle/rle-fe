import { Injectable } from '@angular/core';
import { ApiMethod, AuthEndPoints } from 'src/app/core/constant/api-constant';
import { HttpService } from 'src/app/core/service/http/http.service';

@Injectable({
  providedIn: 'root'
})
export class ResearchService {

  constructor(private httpService:HttpService) { }

  public getResearchDetails(lab_id:any){
      return this.httpService.requestCall(
        ApiMethod.GET,
        AuthEndPoints.GET_RESEARCH,
        '',
        lab_id    
      );
    }
    public getAllPublications(lab_id:any){
      return this.httpService.requestCall(
        ApiMethod.GET,
        AuthEndPoints.GET_ALL_PUBLICATIONS,
        '',
        lab_id    
      );
    }
    public getAllConferences(lab_id:any){
      return this.httpService.requestCall(
        ApiMethod.GET,
        AuthEndPoints.GET_ALL_CONFERENCES,
        '',
        lab_id    
      );
    }
  
}