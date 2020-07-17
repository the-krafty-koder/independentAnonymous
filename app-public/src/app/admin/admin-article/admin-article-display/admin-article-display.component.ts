import { Component, OnInit,Input,ChangeDetectorRef } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-admin-article-display',
  templateUrl: './admin-article-display.component.html',
  styleUrls: ['./admin-article-display.component.css']
})
export class AdminArticleDisplayComponent implements OnInit {
  
  @Input() article:any;
  public url:string = "http://localhost:3000/api";
  public image:any;
  public extension:string;
  public hasImage:boolean = false;

  constructor(
    private http:HttpClient,
    private formBuilder: FormBuilder,
    private cdr:ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.hasImage = this.checkForImage();
    this.cdr.detectChanges();
  }

  public checkForImage():boolean{
    return this.article.image != "none" ;
  }

  public selectImage(event):void{
    if(event.target.files.length > 0){
      const file = event.target.files[0]  // get image file from target;
      this.image = file;
      this.extension = file.name.split(".")[1];
      console.log("Gotten file" + this.extension);
    }
  }

  public onSubmit():void{

    const formData = new FormData();

    formData.append('file',this.image,`${this.article._id}.${this.extension}`);
    formData.append('file_id',this.article._id);

    console.log(this.article._id);
    console.log(formData.get("file_id"));

    const options = {
      headers: new HttpHeaders({ "Content-Type": "multipart/form-data"})
    };

    this.http.post<any>(`${this.url}/upload`,formData).subscribe((result)=>{

        const postData = new FormData();
        postData.append('image',result.originalname);

        this.http.put(`${this.url}/articles/song-articles/${this.article._id}`,postData).subscribe(result=>console.log(result));
        
      },(err)=>console.log(err));
    };
};

