import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResearchService } from 'src/app/services/research/research.service';

@Component({
  selector: 'app-conferences',
  templateUrl: './conferences.component.html',
  styleUrls: ['./conferences.component.scss']
})
export class ConferencesComponent implements OnInit {
  lab_id:any
  conferences:any
  constructor(private researchService:ResearchService,
    private route: ActivatedRoute,
    private router: Router) { }
  ngOnInit(): void {
    this.lab_id = this.route.parent?.snapshot.paramMap.get('lab_id');
    this.getAllConferences(this.lab_id)
  }
  getAllConferences(lab_id:any){
    this.researchService.getAllConferences(lab_id)?.subscribe((res:any)=>{
      console.log(res)
      this.conferences = res
    })
  }
}
