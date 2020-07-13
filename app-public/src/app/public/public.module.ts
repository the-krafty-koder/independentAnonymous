import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicComponent } from './public.component';
import { PublicRoutingModule } from './public-routing/public-routing.module';
import { PublicReviewComponent } from './public-review/public-review.component';
import { PublicInterviewComponent } from './public-interview/public-interview.component';
import { PublicPodcastComponent } from './public-podcast/public-podcast.component';
import { PublicSocialComponent } from './public-social/public-social.component';
import { PublicBaseComponent } from './public-base/public-base.component';
import { PublicHomeComponent } from './public-home/public-home.component';
import { ArticleDisplayComponent } from './public-review/article-display/article-display.component';
import { InterviewDisplayComponent } from './public-interview/interview-display/interview-display.component';

@NgModule({
  imports: [
    CommonModule,
    PublicRoutingModule
  ],
  declarations: [ 
    PublicComponent,
    PublicReviewComponent, 
    PublicInterviewComponent, 
    PublicPodcastComponent, 
    PublicSocialComponent, PublicBaseComponent, PublicHomeComponent, ArticleDisplayComponent, InterviewDisplayComponent
  ],
  exports: [ 
    PublicComponent,
    PublicReviewComponent, 
    PublicInterviewComponent, 
    PublicPodcastComponent, 
    PublicSocialComponent
  ]
  
})
export class PublicModule { }
