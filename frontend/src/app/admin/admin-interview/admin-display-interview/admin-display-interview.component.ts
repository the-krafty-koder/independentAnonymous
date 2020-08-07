import { Component, OnInit,Input,ChangeDetectorRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DataService } from '../../../core/data-service/data.service';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

declare var $:any;

@Component({
  selector: 'app-admin-display-interview',
  templateUrl: './admin-display-interview.component.html',
  styleUrls: ['./admin-display-interview.component.css']
})
export class AdminDisplayInterviewComponent implements OnInit {
  @Input() interview:any;
  public hasImage:boolean;
  public imageUrl:string;
  public url:string = "http://127.0.0.1:3000";
  public tag = new FormControl("");
  public description = new FormControl("");
  public creator = new FormControl("");
  public title = new FormControl("");

  public checkForImage():boolean{
    return this.interview.image != "none" ;
  }
  
  constructor(
    private cdr:ChangeDetectorRef,
    private dataService:DataService,
    private http:HttpClient,
    private router:Router
  ) { }

  ngOnInit() {
    this.hasImage = this.checkForImage();
    this.imageUrl = `${this.url}/${this.interview.image}`;
    this.cdr.detectChanges();
  }

  public onEditSubmit():any{
    let editFormValues = {
      title:this.title.value,
      description:this.description.value,
      tag:this.tag.value,
      creator:this.creator.value
    };

    this.http.put(`${environment.apiBaseUrl}/api/interview/${this.interview._id}`,editFormValues).subscribe((result)=>console.log(result));
    this.router.navigateByUrl('/admin/interview');
  }

 
  public onEditButtonClicked():any{
    $(`#${this.interview._id}`).modal('show');
    console.log("Clicked");
  }

  public onDeleteClicked():any{
    this.http.delete(`${environment.apiBaseUrl}/api/interview/${this.interview._id}`).subscribe((result)=>this.router.navigateByUrl('/admin/interview'));
    this.router.navigateByUrl('/admin/interview');
  }

  public onViewClicked():any{
  
  }

}
