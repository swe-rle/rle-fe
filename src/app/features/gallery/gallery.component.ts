import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GalleryService } from 'src/app/services/gallery/gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit{
  lab_id:any
  gallery:any
  constructor(private galleryService:GalleryService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.lab_id = this.route.parent?.snapshot.paramMap.get('lab_id');
    this.getGallery(this.lab_id)
  }
  getGallery(lab_id:any){
    this.galleryService.getGallery(lab_id)?.subscribe((res:any)=>{
      console.log(res)
      this.gallery = res
      let splitstrings = this.gallery[0].images 
      console.log(splitstrings)
    })
  }

}
