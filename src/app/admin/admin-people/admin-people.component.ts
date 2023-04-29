import { ChangeDetectorRef, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LoadingStrategy, SlidingDirection } from 'ng-gallery';
import { ToastrService } from 'ngx-toastr';
import { PeopleService } from 'src/app/services/people/people.service';

@Component({
  selector: 'app-admin-people',
  templateUrl: './admin-people.component.html',
  styleUrls: ['./admin-people.component.scss']
})
export class AdminPeopleComponent {

  constructor(private peopleService:PeopleService,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private cdr: ChangeDetectorRef) { }
    isPersonImagePresent:boolean = true;
    peopleform!:FormGroup
    // islabLogoPresent:boolean = true;
    // labLogo:any = ''
    // labCoverPage:any
    public lab_id:any
    public selectedFile !: File;
    
    facultyList:any
    studentsList:any
    sponsorsList:any

  ngOnInit() {
    this.peopleform = new FormGroup({
      PersonName: new FormControl("",Validators.required),
      RollNo: new FormControl("",Validators.required),
      LinkedinUrl: new FormControl("",Validators.required),
      GithubUrl: new FormControl("",Validators.required),
      PersonalWebUrl: new FormControl("",Validators.required),
      // labCoverPage : new FormControl("",Validators.required),
      // labLogo : new FormControl("",Validators.required),
      // labTwitterHandle: new FormControl("",Validators.required),
      // labPhone: new FormControl("",Validators.required),
      // labEmail: new FormControl("",Validators.required),
      // labAddress: new FormControl("",Validators.required),
    });
    this.lab_id = this.route.parent?.snapshot.paramMap.get('lab_id');

  }

  onpeopleSubmit(data:any){
  
  }

  getAllLabMemberDetails(lab_id:any){
    this.peopleService.getAllPeople(lab_id)?.subscribe((res:any)=>{
      console.log('entire response',res)
      this.facultyList = res.filter((data: { role_name: string; }) => data.role_name =='faculty');
      this.studentsList = res.filter((data: { role_name: string; }) => data.role_name =='student');
      this.sponsorsList = res.filter((data: { role_name: string; }) => data.role_name =='sponsor');
    })
    }

    onFileSelected(event: any): void {
      this.selectedFile = event.target.files[0]
    }

}
