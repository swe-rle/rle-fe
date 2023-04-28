import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/core/service/http/http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpService:HttpService) { }
}
