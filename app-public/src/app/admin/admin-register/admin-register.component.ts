import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../core/authentication/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.css']
})
export class AdminRegisterComponent implements OnInit {

  public formError: string = '';
  public credentials = {
    name: '',
    email: '',
    password: ''
  };

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
  }

  public onRegisterSubmit():void{
      if (!this.credentials.name ||
          !this.credentials.email ||
          !this.credentials.password
        ){
         this.formError = 'All fields are required, please try again';
      } else {
         this.doRegister();
      }
  }

  private doRegister(): void {
    this.authenticationService.register(this.credentials).then(() => this.router.navigateByUrl('/'))
                              .catch((message) => this.formError = message);
    }
}
