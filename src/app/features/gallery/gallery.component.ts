import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GalleryConfig, GalleryItem, ImageItem } from 'ng-gallery';
import { GalleryService } from 'src/app/services/gallery/gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit{
  lab_id:any
  gallery:any
  config: GalleryConfig | undefined;
  images!: GalleryItem[];
  galleryList:any
  imagesList:any;
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
      this.galleryList = []
      this.gallery.forEach((value:any, index1:any) => {
        let imagesList = value.images
        this.galleryList[index1] = []
        imagesList.forEach((value:any, index2:any) => {
          this.galleryList[index1][index2]=new ImageItem({ src: value.url});
      });
      console.log(imagesList)
    });
    console.log(this.galleryList)
      
    })
  }

}
