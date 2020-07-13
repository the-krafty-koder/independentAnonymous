import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { PublicReviewComponent } from '../public-review/public-review.component';
import { PublicInterviewComponent } from '../public-interview/public-interview.component';
import { PublicPodcastComponent } from '../public-podcast/public-podcast.component';
import { PublicSocialComponent } from '../public-social/public-social.component';
import { PublicHomeComponent } from '../public-home/public-home.component';


const routes:Routes = [
    { path:'home',component:PublicHomeComponent },
    { path:'reviews',component:PublicReviewComponent },
    { path:'podcasts',component:PublicPodcastComponent },
    { path:'interviews',component:PublicInterviewComponent },
    { path:'social',component:PublicSocialComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class PublicRoutingModule { }
