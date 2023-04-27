import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { LabMembersService } from './lab-members.service';
import { GlobalLabId } from 'src/app/core/constant/global-id';

@Component({
  selector: 'app-lab-members',
  templateUrl: './lab-members.component.html',
  styleUrls: ['./lab-members.component.scss']
})
export class LabMembersComponent implements OnInit {

  constructor(private labMembersService:LabMembersService) { }
  ngOnInit(): void {
    this.getAllLabMemberDetails(GlobalLabId.LABID)
  }
  getAllLabMemberDetails(lab_id:any){
    this.labMembersService._labMemberDetails$.subscribe((res)=>{
      console.log(res);
    });
    this.labMembersService.getAllLabMembers(lab_id);
  } 

}
