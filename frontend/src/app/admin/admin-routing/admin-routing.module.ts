import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from '../admin.component';
import { AdminHomeComponent } from '../admin-home/admin-home.component';
import { AdminArticleComponent } from '../admin-article/admin-article.component';
import { AdminPodcastComponent } from '../admin-podcast/admin-podcast.component';
import { AdminInterviewComponent } from '../admin-interview/admin-interview.component';
import { AdminBaseComponentComponent } from '../admin-base-component/admin-base-component.component';
import { AdminAnalyticsComponent } from '../admin-analytics/admin-analytics.component';
import { AdminRegisterComponent } from '../admin-register/admin-register.component';
import { AdminLoginComponent } from '../admin-login/admin-login.component';

const routes:Routes = [
    { path:'home',component:AdminHomeComponent },
    { path:'article',component:AdminArticleComponent },
    { path:'podcast',component:AdminPodcastComponent },
    { path:'interview',component:AdminInterviewComponent },
    { path:'analytics',component:AdminAnalyticsComponent },
    { path:'register',component:AdminRegisterComponent },
    { path:'login',component:AdminLoginComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
