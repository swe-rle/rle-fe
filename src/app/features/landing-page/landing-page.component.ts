import { Component, NgModule} from '@angular/core';
import { GalleryComponent, GalleryConfig, GalleryItem, ImageItem, LoadingStrategy, SlidingDirection, ThumbnailsPosition, ThumbnailsView } from 'ng-gallery';
import { catchError, map, Observable } from 'rxjs';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  config: GalleryConfig | undefined;
  images!: GalleryItem[];
  mixed!: GalleryItem[];
ngOnInit() {
  this.images = [
    new ImageItem({ src: 'assets/img/slider/compiler-1.jpg'}),
    new ImageItem({ src: 'assets/img/slider/cse-2.jpg'}),
    new ImageItem({ src: 'assets/img/slider/cse-1.jpg'}),
    new ImageItem({ src: 'assets/img/slider/faculty-2.jpg'}),
    new ImageItem({ src: 'assets/img/slider/faculty-1.jpg'}),
    new ImageItem({ src: 'assets/img/slider/iith.jpg'}),

    // ... more items
  ];

  this.mixed = [
    new ImageItem({ src: 'assets/img/slider/faculty-2.jpg'}),
    new ImageItem({ src: 'assets/img/slider/faculty-1.jpg'}),    
  ]
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

}
