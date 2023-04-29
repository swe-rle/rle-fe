import { ChangeDetectorRef, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PeopleService } from 'src/app/services/people/people.service';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.scss']
})
export class AdminProfileComponent {


  constructor(private peopleService:PeopleService,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private cdr: ChangeDetectorRef) { }
    isPersonImagePresent:boolean = true;
    profileform!:FormGroup
    // islabLogoPresent:boolean = true;
    // labLogo:any = ''
    // labCoverPage:any
    public lab_id:any
    public selectedFile !: File;
    
    facultyList:any
    studentsList:any
    sponsorsList:any

  ngOnInit() {
    this.profileform = new FormGroup({
      PersonName: new FormControl("",Validators.required),
      RollNo: new FormControl("",Validators.required),
      LinkedinUrl: new FormControl("",Validators.required),
      GithubUrl: new FormControl("",Validators.required),
      PersonalWebUrl: new FormControl("",Validators.required),
    });
    // this.lab_id = this.route.parent?.snapshot.paramMap.get('lab_id');

  }

  onprofileSubmit(data:any){
  
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0]
  }
}
