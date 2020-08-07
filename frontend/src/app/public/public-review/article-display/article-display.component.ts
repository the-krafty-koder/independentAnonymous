import { Component, OnInit, Input } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-article-display',
  templateUrl: './article-display.component.html',
  styleUrls: ['./article-display.component.css']
})
export class ArticleDisplayComponent implements OnInit {
  @Input() article:any;
  public imageUrl:string;

  constructor() { }

  ngOnInit() {
    this.imageUrl = `${environment.apiBaseUrl}/${this.article.image}`;
  }

}
