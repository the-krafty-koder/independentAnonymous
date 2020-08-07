import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthenticationService } from '../../core/authentication/authentication.service';

declare var $: any;

@Component({
  selector: 'app-admin-base-component',
  templateUrl: './admin-base-component.component.html',
  styleUrls: ['./admin-base-component.component.css']
})
export class AdminBaseComponentComponent implements OnInit {

  constructor(
    private router:Router,
    private authenticationService:AuthenticationService
  ) { }

  ngOnInit() {
  }

  public logout():void{
    this.authenticationService.logout();
  }

  public isLoggedIn():boolean{
    return this.authenticationService.isLoggedIn();
  }

  public getUsername():String{
    const {email,username} = this.authenticationService.getCurrentUser();
    return username;
  }

  toggle() {
	$('.ui.sidebar').sidebar({context: $('.bottom')})
	                .sidebar('setting','dimPage',false)
	                .sidebar('setting','defaultTransition','uncover')
                    .sidebar('attach events', '.menu .item.toggler');
  }

  drop() {
    $('.ui.dropdown').dropdown();
  }

}
