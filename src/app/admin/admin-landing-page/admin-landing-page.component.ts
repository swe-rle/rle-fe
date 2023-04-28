import { Component } from '@angular/core';
import { GalleryComponent, GalleryConfig, GalleryItem, ImageItem, LoadingStrategy, SlidingDirection, ThumbnailsPosition, ThumbnailsView } from 'ng-gallery';

@Component({
  selector: 'app-admin-landing-page',
  templateUrl: './admin-landing-page.component.html',
  styleUrls: ['./admin-landing-page.component.scss']
})

export class AdminLandingPageComponent {
  config: GalleryConfig | undefined;
  images!: GalleryItem[];
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
  this.config = {
   thumb:false,
   dots: true,
    loadingStrategy: LoadingStrategy.Preload,
    slidingDirection: SlidingDirection.Horizontal,

  };
}

}
