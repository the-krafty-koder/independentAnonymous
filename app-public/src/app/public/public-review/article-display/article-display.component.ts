import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article-display',
  templateUrl: './article-display.component.html',
  styleUrls: ['./article-display.component.css']
})
export class ArticleDisplayComponent implements OnInit {
  @Input() article:any;

  constructor() { }

  ngOnInit() {
  }

}
