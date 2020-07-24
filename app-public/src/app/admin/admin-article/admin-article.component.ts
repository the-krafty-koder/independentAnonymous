import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DataService } from '../../core/data-service/data.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-admin-article',
  templateUrl: './admin-article.component.html',
  styleUrls: ['./admin-article.component.css']
})
export class AdminArticleComponent implements OnInit {
  public songArticles = [];
  public albumArticles = [];
  public movieArticles = [];
  public showArticles = [];
  public songUrl:string = `${environment.apiBaseUrl}/create/song-article`;
  public showUrl:string = `${environment.apiBaseUrl}/create/show-article`;
  public albumUrl:string = `${environment.apiBaseUrl}/create/album-article`;
  public movieUrl:string = `${environment.apiBaseUrl}/create/movie-article`;

  constructor(
    private dataService:DataService,
    private cdr:ChangeDetectorRef 
  ) {};

  /**
   * displayLess(entries:Number) => void
   * Limits number of articles displayed
  **/
  public displayLess(entries:number):void{
    this.songArticles = this.songArticles.slice(0,entries);
    this.albumArticles = this.albumArticles.slice(0,entries);
    this.movieArticles = this.movieArticles.slice(0,entries);
    this.showArticles = this.showArticles.slice(0,entries);
  }

  ngOnInit() {
    this.dataService.fetchData().subscribe(results => {
        [this.songArticles,this.albumArticles,this.movieArticles,this.showArticles] = results;
        this.displayLess(4);
        this.cdr.detectChanges();    // update this.articles after Observable emits data
    });
  }
}
