import { Component, OnInit, Input,ChangeDetectorRef } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { DataService } from '../../../core/data-service/data.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-interview-watch',
  templateUrl: './interview-watch.component.html',
  styleUrls: ['./interview-watch.component.css']
})
export class InterviewWatchComponent implements OnInit {
  public interview:any;
  public videoUrl:string;
  public imageUrl:string;
  public id:string;

  constructor(
    private dataService:DataService,
    private http:HttpClient,
    private activatedRoute:ActivatedRoute,
    private cdr:ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {     // get id parameter from router
      this.id = params.get("id");
      this.http.get(`${environment.apiBaseUrl}/api/interview/${this.id}`).subscribe((result)=>{
       this.interview = result;
       this.cdr.detectChanges();
       this.videoUrl = `${environment.apiBaseUrl}/${this.interview.file}`;
       this.cdr.detectChanges();
       this.imageUrl = `${environment.apiBaseUrl}/${this.interview.image}`;
      });
    });   
  }

}
