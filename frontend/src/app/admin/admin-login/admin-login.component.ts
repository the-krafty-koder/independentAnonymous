import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../core/authentication/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  public formError = "";

  public credentials = {
     username:"",
     email:"",
     password:""
  }

  constructor(
      private router:Router,
      private authenticationService:AuthenticationService
    ) {}

  ngOnInit() {
  }

  public onLoginSubmit(){
      if(!this.credentials.email || !this.credentials.password){
          this.formError = "All fields are required";
      }else{
          this.doLogin();
      }
  }

  public doLogin(){
      this.authenticationService.login(this.credentials)
                                .then(()=> this.router.navigateByUrl('/admin/article'))
                                .catch((message) => {
                                    this.formError = message;
                                });
  }

}
