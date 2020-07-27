import { Component, OnInit,Input,ChangeDetectorRef } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-podcast-display',
  templateUrl: './podcast-display.component.html',
  styleUrls: ['./podcast-display.component.css']
})
export class PodcastDisplayComponent implements OnInit {

  @Input() podcast:any;
  public imageUrl:string;
  public likes:number;

  constructor(
    private http:HttpClient,
    private cdr:ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.imageUrl = `${environment.apiBaseUrl}/${this.podcast.image}`;
  }

}
