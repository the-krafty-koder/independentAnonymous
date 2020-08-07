import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { FormControl,FormBuilder } from "@angular/forms";
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { environment } from '../../../environments/environment';
import { DataService } from '../../core/data-service/data.service';

@Component({
  selector: 'app-admin-interview',
  templateUrl: './admin-interview.component.html',
  styleUrls: ['./admin-interview.component.css']
})
export class AdminInterviewComponent implements OnInit {
  public video:any;
  public filename:string;
  public image:any;
  public imageFilename:string;
  public url = environment.apiBaseUrl;
  public interviews:any;

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
    this.dataService.fetchInterviewData().subscribe((result)=>{
      this.interviews = result;
      this.cdr.detectChanges();
    })
  }

  public selectVideo(event):void{
    if(event.target.files.length > 0){
      const file = event.target.files[0]  // get video file from target;
      this.video = file;
      let extension = file.name.split(".")[1];
      this.filename = `video-${file.name}`;
      console.log("Gotten file" + this.filename);
    }
  }

  public selectImage(event):void{
    if(event.target.files.length > 0){
      const file = event.target.files[0]  // get image file from target;
      this.image = file;
      this.imageFilename = `videoImage-${file.name}`;
      console.log("Gotten file" + this.filename);
    }
  }

  public onSubmit():void{

    const imageData = new FormData();
    const fileData = new FormData();
    let new_file:any;
    let new_image:any;
    let interview:any;

    fileData.append('file',this.video,this.filename);
    imageData.append('file',this.image,this.imageFilename);
    let Interview = {
      'title':this.title.value,
      'description':this.description.value,
      'tag':this.tag.value,
      'creator':this.creator.value
    };

    const options = {
      headers: new HttpHeaders({ "Content-Type": "multipart/form-data"})
    };

    this.http.post<any>(`${this.url}/api/interview`,Interview).subscribe((interview_obj)=>{
        interview  = interview_obj[0];
        this.cdr.detectChanges();
        console.log("Object is =>"+interview);
        this.http.post(`${this.url}/uploads/media/`,fileData).subscribe((result)=>{
          console.log("File is =>"+result);
          if(result['path'])new_file=result['path'];
          this.cdr.detectChanges();
          this.http.post(`${this.url}/uploads/interview/image`,imageData).subscribe((result)=>{
            console.log("Im File is =>"+result);
            if(result['path'])new_image=result['path'];
            this.cdr.detectChanges();
            console.log(new_image);
            console.log(new_file);
            console.log(interview._id);
            this.http.put(`${this.url}/api/interview/${interview._id}`,
             {'file':new_file,'image':new_image}).subscribe(result=>console.log(result));
          });
        });
        
      },(err)=>console.log(err));
  };
}
