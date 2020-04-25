import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PublicComponent } from './public/public.component';
import { AdminComponent } from './admin/admin.component';
import { AdminArticleComponent } from './admin/admin-article/admin-article.component';
import { AdminPodcastComponent } from './admin/admin-podcast/admin-podcast.component';
import { AdminInterviewComponent } from './admin/admin-interview/admin-interview.component';
import { AdminBaseComponentComponent } from './admin/admin-base-component/admin-base-component.component';
import { AdminAnalyticsComponent } from './admin/admin-analytics/admin-analytics.component';

@NgModule({
  declarations: [
    AppComponent,
    PublicComponent,
    AdminComponent,
    AdminArticleComponent,
    AdminPodcastComponent,
    AdminInterviewComponent,
    AdminBaseComponentComponent,
    AdminAnalyticsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
