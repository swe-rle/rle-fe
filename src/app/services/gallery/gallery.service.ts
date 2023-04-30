import { Injectable } from '@angular/core';
import { ApiMethod, AuthEndPoints } from 'src/app/core/constant/api-constant';
import { HttpService } from 'src/app/core/service/http/http.service';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private httpService:HttpService) { }
  getGallery(lab_id:any){
    {
      return this.httpService.requestCall(
        ApiMethod.GET,
        AuthEndPoints.GET_GALLERY,
        '',
        lab_id      
      );
    }
  }

  uploadImage(file:any){
    {
      const formData = new FormData(); 
      formData.append("file", file, file.name);
      return this.httpService.requestCall(
        ApiMethod.POST,
        AuthEndPoints.UPLOAD_IMAGE,
        formData,
        ''      
      );
    }
  }
}
