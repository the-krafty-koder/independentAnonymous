import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public apiBaseUrl:string = "http://localhost:3000/api";

  constructor(
    private http:HttpClient
  ) { }

  public fetchData():any{
    const songArticles = this.http.get(`${this.apiBaseUrl}/articles/song-articles`);
    const albumArticles = this.http.get(`${this.apiBaseUrl}/articles/album-articles`);
    const movieArticles = this.http.get(`${this.apiBaseUrl}/articles/movie-articles`);
    const showArticles = this.http.get(`${this.apiBaseUrl}/articles/show-articles`);

    return forkJoin([songArticles,albumArticles,movieArticles,showArticles]); // fetches data in parallel
  }
}
