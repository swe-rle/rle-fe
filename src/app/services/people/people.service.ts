import { Injectable } from '@angular/core';
import { ApiMethod, AuthEndPoints } from 'src/app/core/constant/api-constant';
import { HttpService } from 'src/app/core/service/http/http.service';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private httpService:HttpService) { }
  getAllPeople(lab_id:any)
  {
    return this.httpService.requestCall(
      ApiMethod.GET,
      AuthEndPoints.GET_ALL_PEOPLE,
      '',
      lab_id      
    );
  }

}
