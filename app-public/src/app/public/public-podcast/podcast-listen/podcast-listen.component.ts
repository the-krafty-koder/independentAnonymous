import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { DataService } from '../../../core/data-service/data.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

declare let $:any;

@Component({
  selector: 'app-podcast-listen',
  templateUrl: './podcast-listen.component.html',
  styleUrls: ['./podcast-listen.component.css']
})
export class PodcastListenComponent implements OnInit {
  public podcast:any;
  public podcastUrl:string;
  public imageUrl:string;
  public id:string;
  public likes:number;

  constructor(
    private dataService:DataService,
    private http:HttpClient,
    private activatedRoute:ActivatedRoute,
    private cdr:ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {     // get id parameter from router
      this.id = params.get("id");
      this.http.get(`${environment.apiBaseUrl}/api/podcast/${this.id}`).subscribe((result)=>{
       this.podcast = result;
       console.log(this.podcast);
       this.cdr.detectChanges();
       this.podcastUrl = `${environment.apiBaseUrl}/${this.podcast.file}`;
       this.cdr.detectChanges();
       this.imageUrl = `${environment.apiBaseUrl}/${this.podcast.image}`;
       this.likes = this.podcast.likes
      });
    });  
  }

  addLike(){
    let likeData = {'likes':this.podcast.likes++};

    this.http.put(`${environment.apiBaseUrl}/api/podcast/${this.podcast._id}`,likeData).subscribe(result=>{
      if(result['likes'])this.likes = result['likes'];
      this.cdr.detectChanges();
    });
  }

}
