import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormControl,FormBuilder } from "@angular/forms";
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { environment } from '../../../environments/environment';
import { DataService } from '../../core/data-service/data.service';

@Component({
  selector: 'app-admin-podcast',
  templateUrl: './admin-podcast.component.html',
  styleUrls: ['./admin-podcast.component.css']
})
export class AdminPodcastComponent implements OnInit {
  public audio:any;
  public filename:string;
  public image:any;
  public imageFilename:string;
  public url = environment.apiBaseUrl;
  public podcasts:any;

  title = new FormControl("");
  description = new FormControl("");
  tag = new FormControl("");
  creator = new FormControl("");

  constructor(
    private formBuilder:FormBuilder,
    private http:HttpClient,
    private cdr:ChangeDetectorRef,
    private dataService:DataService
  ) { }

  ngOnInit() {
    this.dataService.fetchPodcastData().subscribe((result)=>{
      this.podcasts = result;
      this.cdr.detectChanges();
    })
  }

  public selectVideo(event):void{
    if(event.target.files.length > 0){
      const file = event.target.files[0]  // get video file from target;
      this.audio = file;
      this.filename = `podcast-${file.name}`;
      console.log("Gotten file" + this.filename);
    }
  }

  public selectImage(event):void{
    if(event.target.files.length > 0){
      const file = event.target.files[0]  // get image file from target;
      this.image = file;
      this.imageFilename = `podcastImage-${file.name}`;
      console.log("Gotten file" + this.filename);
    }
  }

  public onSubmit():void{

    const imageData = new FormData();
    const fileData = new FormData();
    let new_file:any;
    let new_image:any;
    let podcast:any;

    fileData.append('file',this.audio,this.filename);
    imageData.append('file',this.image,this.imageFilename);
    let Podcast = {
      'title':this.title.value,
      'description':this.description.value,
      'tag':this.tag.value,
      'creator':this.creator.value
    };

    this.http.post<any>(`${this.url}/api/podcast`,Podcast).subscribe((pod_obj)=>{
        podcast  = pod_obj[0];
        this.cdr.detectChanges();
        this.http.post(`${this.url}/uploads/media/`,fileData).subscribe((result)=>{
          if(result['path'])new_file=result['path'];
          this.cdr.detectChanges();
          this.http.post(`${this.url}/uploads/podcast/image`,imageData).subscribe((result)=>{
            if(result['path'])new_image=result['path'];
            this.cdr.detectChanges();
            this.http.put(`${this.url}/api/podcast/${podcast._id}`,
             {'file':new_file,'image':new_image}).subscribe(result=>console.log(result));
          });
        });
        
      },(err)=>console.log(err));
  };

}
