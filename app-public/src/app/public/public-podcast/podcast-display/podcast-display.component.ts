import { Component, OnInit,Input } from '@angular/core';
import { environment } from '../../../../environments/environment';
@Component({
  selector: 'app-podcast-display',
  templateUrl: './podcast-display.component.html',
  styleUrls: ['./podcast-display.component.css']
})
export class PodcastDisplayComponent implements OnInit {

  @Input() podcast:any;
  public imageUrl:string;

  constructor() { }

  ngOnInit() {
    this.imageUrl = `${environment.apiBaseUrl}/${this.podcast.image}`;
  }

}
