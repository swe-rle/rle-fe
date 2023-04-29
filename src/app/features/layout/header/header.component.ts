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
 parseJwt (token:any) {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  return JSON.parse(jsonPayload);
}

   handleCredentialResponse(response:any) {
  // decodeJwtResponse() is a custom function defined by you
  // to decode the credential response.
  const responsePayload = this.parseJwt(response.credential);
  console.log(responsePayload,response.credential)
  console.log("ID: " + responsePayload.sub);
  console.log('Full Name: ' + responsePayload.name);
  console.log('Given Name: ' + responsePayload.given_name);
  console.log('Family Name: ' + responsePayload.family_name);
  console.log("Image URL: " + responsePayload.picture);
  console.log("Email: " + responsePayload.email);
  }
}
