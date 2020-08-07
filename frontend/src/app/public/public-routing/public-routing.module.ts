import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { PublicReviewComponent } from '../public-review/public-review.component';
import { PublicInterviewComponent } from '../public-interview/public-interview.component';
import { PublicPodcastComponent } from '../public-podcast/public-podcast.component';
import { PublicSocialComponent } from '../public-social/public-social.component';
import { PublicHomeComponent } from '../public-home/public-home.component';
import { ReviewReadComponent } from '../public-review/review-read/review-read.component';
import { InterviewWatchComponent } from '../public-interview/interview-watch/interview-watch.component';
import { PodcastListenComponent } from '../public-podcast/podcast-listen/podcast-listen.component';


const routes:Routes = [
    { path:'home',component:PublicHomeComponent },
    { path:'reviews',component:PublicReviewComponent },
    { path:'reviews/article/:tag/:id',component:ReviewReadComponent },
    { path:'podcasts',component:PublicPodcastComponent },
    { path:'podcast/view/:id',component:PodcastListenComponent },
    { path:'interviews',component:PublicInterviewComponent },
    { path:'interviews/view/:id',component:InterviewWatchComponent },
    { path:'social',component:PublicSocialComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class PublicRoutingModule { }
