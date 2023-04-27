import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  id:any
  isLoaded:boolean=false
  @Input() headerData: any;
constructor(public router:Router)
{}
ngOnInit(){
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
      case 'research':{
        this.id = 3;
        break;
      }
      case 'gallery':{
        this.id = 4;
        break;
      }
      case 'login':{
        this.id = 5;
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
}
