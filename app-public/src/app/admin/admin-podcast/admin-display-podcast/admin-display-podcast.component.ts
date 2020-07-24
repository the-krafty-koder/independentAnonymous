import { Component, OnInit,Input,ChangeDetectorRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DataService } from '../../../core/data-service/data.service';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

declare var $:any;

@Component({
  selector: 'app-admin-display-podcast',
  templateUrl: './admin-display-podcast.component.html',
  styleUrls: ['./admin-display-podcast.component.css']
})
export class AdminDisplayPodcastComponent implements OnInit {
  @Input() podcast:any;
  public hasImage:boolean;
  public imageUrl:string;
  public url:string = "http://127.0.0.1:3000";
  public tag = new FormControl("");
  public description = new FormControl("");
  public creator = new FormControl("");
  public title = new FormControl("");

  constructor(
    private cdr:ChangeDetectorRef,
    private dataService:DataService,
    private http:HttpClient,
    private router:Router
  ) { }

  ngOnInit() {
    this.imageUrl = `${this.url}/${this.podcast.image}`;
    this.cdr.detectChanges();
  }

  public onEditSubmit():any{
    let editFormValues = {
      title:this.title.value,
      description:this.description.value,
      tag:this.tag.value,
      creator:this.creator.value
    };

    this.http.put(`${environment.apiBaseUrl}/api/podcast/${this.podcast._id}`,editFormValues).subscribe((result)=>console.log(result));
  }

  public onEditButtonClicked():any{
    $(`#${this.podcast._id}`).modal('show');
    console.log("Clicked");
  }

  public onDeleteClicked():any{
    this.http.delete(`${environment.apiBaseUrl}/api/podcast/${this.podcast._id}`).subscribe((result)=>this.router.navigateByUrl('/admin/interview'));
  }

}
