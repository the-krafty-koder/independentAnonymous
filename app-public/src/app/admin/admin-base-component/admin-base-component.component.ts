import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-admin-base-component',
  templateUrl: './admin-base-component.component.html',
  styleUrls: ['./admin-base-component.component.css']
})
export class AdminBaseComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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
