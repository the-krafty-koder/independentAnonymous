import { Component, OnInit, Input } from '@angular/core';
import { environment } from '../../../../environments/environment';
@Component({
  selector: 'app-interview-display',
  templateUrl: './interview-display.component.html',
  styleUrls: ['./interview-display.component.css']
})
export class InterviewDisplayComponent implements OnInit {
  @Input() interview:any;
  public imageUrl:string;

  constructor() { }

  ngOnInit() {
    this.imageUrl = `${environment.apiBaseUrl}/${this.interview.image}`;
  }

}
