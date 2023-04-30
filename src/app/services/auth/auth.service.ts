import { Injectable } from '@angular/core';
import { ApiMethod, AuthEndPoints } from 'src/app/core/constant/api-constant';
import { HttpService } from 'src/app/core/service/http/http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpService:HttpService) { }

  public authenticateUser(data:any){
    return this.httpService.requestCall(
      ApiMethod.POST,
      AuthEndPoints.AUTHENTICATE_USER,
      data
    )
  }
  }
