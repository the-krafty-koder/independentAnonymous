import { Component, OnInit,Input,ChangeDetectorRef } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

declare let $:any;

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
  public imageUrl:string;

  constructor(
    private http:HttpClient,
    private formBuilder: FormBuilder,
    private cdr:ChangeDetectorRef,
    private router:Router
  ) { }

  ngOnInit() {
    this.hasImage = this.checkForImage();
    this.imageUrl = `http://localhost:3000/${this.article.image}`;
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
    const filename = `${this.article.tag}-${this.article._id}.${this.extension}`

    formData.append('file',this.image,filename);
    formData.append('file_id',this.article._id);

    const options = {
      headers: new HttpHeaders({ "Content-Type": "multipart/form-data"})
    };

    this.http.post<any>(`${this.url}/upload/articles/image`,formData).subscribe((result)=>{

        const postData = {image:result.path};

        return this.http.put(`${this.url}/articles/${this.article.tag}-articles/${this.article._id}`,postData).subscribe(result=>this.router.navigateByUrl('/admin/article'));
        
      },(err)=>console.log(err));
    };

  public onClickButton(){
    $(`#${this.article._id}`).modal('show');
  }
};

