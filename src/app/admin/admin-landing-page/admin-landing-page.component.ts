import { ChangeDetectorRef, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { GalleryComponent, GalleryConfig, GalleryItem, ImageItem, LoadingStrategy, SlidingDirection, ThumbnailsPosition, ThumbnailsView } from 'ng-gallery';
import { Config, Columns, DefaultConfig } from 'ngx-easy-table';
import { ToastrService } from 'ngx-toastr';
import { GalleryService } from 'src/app/services/gallery/gallery.service';
import { LandingPageService } from 'src/app/services/landingpage/landing-page.service';

@Component({
  selector: 'app-admin-landing-page',
  templateUrl: './admin-landing-page.component.html',
  styleUrls: ['./admin-landing-page.component.scss']
})

export class AdminLandingPageComponent {
  config: GalleryConfig | undefined;
  selectedLogoFile!: File;
  images!: GalleryItem[];
  imagesList:any;
  isSlidersEmpty:boolean = false
  public configuration!: Config;
  public columns!: Columns[];
  constructor(private landingPageService:LandingPageService,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private cdr: ChangeDetectorRef,
    private galleryService:GalleryService) { }
    isCoverImagePresent:boolean = true;
    labOverviewform!:FormGroup
    islabLogoPresent:boolean = true;
    labLogo:any = ''
    labCoverPage:any
  public lab_id:any
  public selectedCoverPageFile !: File;

ngOnInit() {
  this.configuration = { ...DefaultConfig };
  this.configuration.searchEnabled = true;
  // ... etc.
  this.columns = [
    { key: 'phone', title: 'Phone' },
    { key: 'age', title: 'Age' },
    { key: 'company', title: 'Company' },
    { key: 'name', title: 'Name' },
    { key: 'isActive', title: 'STATUS' },
  ];
  this.labOverviewform = new FormGroup({
    labName: new FormControl("",Validators.required),
    labOverview: new FormControl("",Validators.required),
    labTwitterHandle: new FormControl("",Validators.required),
    labPhone: new FormControl("",Validators.required),
    labEmail: new FormControl("",Validators.required),
    labAddress: new FormControl("",Validators.required),
  });
  this.lab_id = this.route.parent?.snapshot.paramMap.get('lab_id');
  this.getLandingPageDetails(this.lab_id)
  this.images = [ ];
  this.config = {
   thumb:false,
   dots: true,
    loadingStrategy: LoadingStrategy.Preload,
    slidingDirection: SlidingDirection.Horizontal,

  };
}

getLandingPageDetails(lab_id:any){
  this.landingPageService.getLandingPageDetails(lab_id)?.subscribe((res:any)=>{
    console.log(res)
    this.labLogo = res.logo
    this.labCoverPage = res.cover_url.blob_storage
    this.labOverviewform.patchValue({
     labName: res.name,
     labOverview: res.overview,
     labTwitterHandle: res.twitter_handle,
     labPhone: res.contact_us.phone,
     labEmail: res.contact_us.email,
     labAddress: res.contact_us.address,
   });
   this.imagesList = res?.slider
     this.images = []
     this.imagesList.forEach((value:any, index:any) => {
       this.images.push(new ImageItem({ src: value.image_url}));
   });
   });
}
onlabOverviewSubmit(data:any){
  
}
onFileLogoSelected(event: any): void {
  this.selectedLogoFile = event.target.files[0]
}

onFileCoverPageSelected(event: any): void {
  this.selectedCoverPageFile = event.target.files[0]
}

uploadImage(file:any, type:any){
  if(file!=undefined){
  console.log(file);
  this.galleryService.uploadImage(file)?.subscribe(
      (res: any) => {
         console.log(res)
         if(type == 'logo'){
          this.labLogo = res.url
          }
          if(type == 'coverPage'){
            this.labCoverPage = res.url
          }
      }
  );
}
else{
  this.toastr.error('','Please select image', {
    timeOut: 3000,
  })
}
}

}
