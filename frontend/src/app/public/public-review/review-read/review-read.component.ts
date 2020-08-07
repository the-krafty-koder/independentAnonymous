import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../../core/data-service/data.service';
import { environment } from '../../../../environments/environment';

const order = {
	song:0,
	album:1,
	movie:2,
	show:3
};

@Component({
  selector: 'app-review-read',
  templateUrl: './review-read.component.html',
  styleUrls: ['./review-read.component.css']
})
export class ReviewReadComponent implements OnInit {
  public article:any;
  public id:string;
  public apiUrl:string;
  public tag:string;

  constructor(
    private activatedRoute:ActivatedRoute,
    private dataService:DataService,
    private cdr:ChangeDetectorRef 
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {     // get id parameter from router
      this.id = params.get("id");
      this.tag = params.get("tag");
    });

    this.dataService.fetchData().subscribe(results => {
        let index = order[this.tag];

        this.article = results[index].filter(res=>res._id === this.id)[0];
        this.apiUrl = `${environment.apiBaseUrl}/${this.article.image}`;
        this.cdr.detectChanges();
;    });

    
  }

}
