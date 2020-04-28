import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { CommonModule } from  '@angular/common';
import { AdminRoutingModule } from './admin-routing/admin-routing.module';


import { AdminComponent } from './admin.component';
import { AdminArticleComponent } from './admin-article/admin-article.component';
import { AdminPodcastComponent } from './admin-podcast/admin-podcast.component';
import { AdminInterviewComponent } from './admin-interview/admin-interview.component';
import { AdminBaseComponentComponent } from './admin-base-component/admin-base-component.component';
import { AdminAnalyticsComponent } from './admin-analytics/admin-analytics.component';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';



@NgModule({
  imports:[
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [
    AdminComponent,
    AdminBaseComponentComponent,
    AdminArticleComponent,
    AdminPodcastComponent,
    AdminInterviewComponent,
    AdminAnalyticsComponent,
    AdminSidebarComponent,
    AdminHomeComponent
  ],
  exports: [
    AdminComponent,
    AdminBaseComponentComponent,
    AdminArticleComponent,
    AdminPodcastComponent,
    AdminInterviewComponent,
    AdminAnalyticsComponent
  ]
})
export class AdminModule{}