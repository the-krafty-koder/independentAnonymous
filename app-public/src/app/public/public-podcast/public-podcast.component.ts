import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { environment } from '../../../environments/environment';
import { DataService } from '../../core/data-service/data.service';

@Component({
  selector: 'app-public-podcast',
  templateUrl: './public-podcast.component.html',
  styleUrls: ['./public-podcast.component.css']
})
export class PublicPodcastComponent implements OnInit {

  public podcasts:any;

  constructor(
    private dataService:DataService,
    private http:HttpClient,
    private cdr:ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.dataService.fetchPodcastData().subscribe((result)=>{
      this.podcasts = result;
      this.cdr.detectChanges();
    });

  }
}
