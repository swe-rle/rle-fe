import { Component, NgModule} from '@angular/core';
import { GalleryComponent, GalleryConfig, GalleryItem, ImageItem, LoadingStrategy, SlidingDirection, ThumbnailsPosition, ThumbnailsView } from 'ng-gallery';
import { catchError, map, Observable } from 'rxjs';
import { LayoutService } from '../layout/layout.service';
import { GlobalLabId } from 'src/app/core/constant/global-id';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  config: GalleryConfig | undefined;
  images!: GalleryItem[];
  imagesList:any;
  landingPageDetails:any;
  constructor(public layoutService:LayoutService) { }

ngOnInit() {
  this.getAllHeaderFooterDetails(GlobalLabId.LABID);
  this.images = [
    
    ];
  this.config = {
   thumb:false,
   dots: true,
    loadingStrategy: LoadingStrategy.Preload,
    slidingDirection: SlidingDirection.Horizontal,
    thumbWidth:10,
    thumbHeight:10,
  };
}
ngAfterViewInit(): void {
  (<any>window).twttr.widgets.load();
}

getAllHeaderFooterDetails(lab_id:any){
  this.layoutService._landingPageDetails$.subscribe((res)=>{
    console.log(res);
    this.landingPageDetails = res
    this.imagesList = res?.slider[0].images
    this.images = []
    this.imagesList.forEach((value:any, index:any) => {
      console.log(value);
      this.images.push(new ImageItem({ src: value}));
  });
  });
  this.layoutService.getHeaderFooterDetails(lab_id);
} 

}
