import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { DataService } from '../../core/data-service/data.service';

declare let $:any;

@Component({
  selector: 'app-public-interview',
  templateUrl: './public-interview.component.html',
  styleUrls: ['./public-interview.component.css']
})
export class PublicInterviewComponent implements OnInit {
  public interviews:any;

  constructor(
    private dataService:DataService,
    private http:HttpClient,
    private cdr:ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.dataService.fetchInterviewData().subscribe((result)=>{
      this.interviews = result;
      this.cdr.detectChanges();
    });

    $(document).ready(function(){
      setTimeout(function(){
        document.getElementById('footer').classList.remove('hide-footer');
      },3000); 
    });
  }

}
