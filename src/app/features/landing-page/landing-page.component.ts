import { Component, NgModule} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GalleryComponent, GalleryConfig, GalleryItem, ImageItem, LoadingStrategy, SlidingDirection, ThumbnailsPosition, ThumbnailsView } from 'ng-gallery';
import { catchError, map, Observable } from 'rxjs';
import { GlobalLabId } from 'src/app/core/constant/global-id';
import { LandingPageService } from 'src/app/services/landingpage/landing-page.service';
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

  public lab_id:any
  constructor(private landingPageService:LandingPageService,
     private route: ActivatedRoute) { }

ngOnInit() {
  this.lab_id = this.route.snapshot.paramMap.get('lab_id');
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
  this.getLandingPageDetails(this.lab_id)
}
ngAfterViewInit(): void {
  (<any>window).twttr.widgets.load();
}

getLandingPageDetails(lab_id:any){
  this.landingPageService._landingPageDetails$.subscribe((res:any)=>{
    console.log(res)
    this.landingPageDetails = res
  });
  this.landingPageService.getLandingPageDetails(lab_id);
}


}
