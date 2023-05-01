import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { GalleryService } from 'src/app/services/gallery/gallery.service';

@Component({
  selector: 'app-admin-gallery',
  templateUrl: './admin-gallery.component.html',
  styleUrls: ['./admin-gallery.component.scss']
})
export class AdminGalleryComponent implements OnInit {
  eventForm!:FormGroup
  selectedEventCoverImage!:File
  selectedEventGalleryImages:Array<File>=[];
  eventCoverImage:any = ''
  eventGalleryImages:any
  lab_id:any
  eventsList:any
  eventsGalleryList:any


  
  constructor(public route:ActivatedRoute,
    public toastr:ToastrService,
    public galleryService:GalleryService
     ) { }
  ngOnInit(): void {
  this.lab_id = this.route.parent?.snapshot.paramMap.get('lab_id');
    this.eventForm = new FormGroup({
      eventName: new FormControl("",Validators.required),
      eventDescription: new FormControl("",Validators.required),
      eventDate: new FormControl("",Validators.required)
    });
    this.getAllGalleryEvents();
   
  }

  onEventCoverImageChange(event:any){
    this.selectedEventCoverImage = event.target.files[0]
  }
  onEventGalleryImageChange(event:any){
    console.log(event.target.files)
    this.selectedEventGalleryImages = event.target.files
  }

  uploadImage(file:any, type:any){
    if(file!=undefined){
    console.log(file);
    this.galleryService.uploadImage(file)?.subscribe(
        (res: any) => {
          console.log(res)
        }
    );
  }
  else{
    this.toastr.error('','Please select image', {
      timeOut: 3000,
    })
  }
  }
  getAllGalleryEvents(){
    this.galleryService.getGallery(this.lab_id)?.subscribe((res:any)=>{
      this.eventsGalleryList = res;
     });
    }

    uploadMultipleImages(files:any){
      if(files!=undefined){
      this.galleryService.uploadMultipleImages(files)?.subscribe((res:any)=>{
        console.log(res)
        this.getAllGalleryEvents();
      })
    }
    else{
      this.toastr.error('','Please select image', {
        timeOut: 3000,
      })
    }
    }

}
