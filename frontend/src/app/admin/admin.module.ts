import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { CommonModule } from  '@angular/common';
import { AdminRoutingModule } from './admin-routing/admin-routing.module';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';


import { AdminComponent } from './admin.component';
import { AdminArticleComponent } from './admin-article/admin-article.component';
import { AdminPodcastComponent } from './admin-podcast/admin-podcast.component';
import { AdminInterviewComponent } from './admin-interview/admin-interview.component';
import { AdminBaseComponentComponent } from './admin-base-component/admin-base-component.component';
import { AdminAnalyticsComponent } from './admin-analytics/admin-analytics.component';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminArticleDisplayComponent } from './admin-article/admin-article-display/admin-article-display.component';
import { AdminDisplayInterviewComponent } from './admin-interview/admin-display-interview/admin-display-interview.component';
import { AdminDisplayPodcastComponent } from './admin-podcast/admin-display-podcast/admin-display-podcast.component';


@NgModule({
  imports:[
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    AdminComponent,
    AdminBaseComponentComponent,
    AdminArticleComponent,
    AdminPodcastComponent,
    AdminInterviewComponent,
    AdminAnalyticsComponent,
    AdminSidebarComponent,
    AdminHomeComponent,
    AdminRegisterComponent,
    AdminLoginComponent,
    AdminArticleDisplayComponent,
    AdminDisplayInterviewComponent,
    AdminDisplayPodcastComponent
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