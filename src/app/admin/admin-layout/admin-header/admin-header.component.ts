// import { Component } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent {
  id:any
  isLoaded:boolean=false
  lab_id:any
  @Input() headerData: any;
constructor(public router:Router,
  public route:ActivatedRoute)
{}
ngOnInit(){
  this.lab_id = this.route.snapshot.paramMap.get('lab_id');
this.id = 1
const myArray = window.location.href.split("/");
    const lastel = (myArray[myArray.length-1])
    switch(lastel){
      case 'home':{
        this.id = 1;
        break;
      }
      case 'people':{
        this.id = 2;
        break;
      }
      case 'research/publications':{
        this.id = 3;
        break;
      }
      case 'research/conferences':{
        this.id = 4;
        break;
      }
      case 'gallery':{
        this.id = 5;
        break;
      }
      case 'login':{
        this.id = 6;
        break;
      }
      // case 'officebearers'||'officebearers2021'||'officebearers2020'||'officebearers2019':{
      //   this.id = 6;
      //   break;
      // }
      // case 'more':{
      //   this.id = 7;
      //   break;
      // }
    }
    this.isLoaded=true
}
setId(id:number){
  this.id = id
}

logout(){
  document.cookie = "rle_session" +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

}
