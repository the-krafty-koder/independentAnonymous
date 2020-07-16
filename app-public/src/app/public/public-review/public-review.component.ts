import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { DataService } from '../../core/data-service/data.service';

@Component({
  selector: 'app-public-review',
  templateUrl: './public-review.component.html',
  styleUrls: ['./public-review.component.css']
})
export class PublicReviewComponent implements OnInit {
  public articles = [];

  constructor(
    private dataService:DataService,
    private cdr:ChangeDetectorRef
  ) {};

  ngOnInit() {
    this.dataService.fetchData().subscribe(results => {
        this.articles = results[0];
        this.cdr.detectChanges();
    });
  }
}

