import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpClientModule,HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import { PublicModule } from './public/public.module';
import { AdminGuard } from './core/authentication/admin.guard';
import { AdminDisplayPodcastComponent } from './admin-display-podcast/admin-display-podcast.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminDisplayPodcastComponent,
  ],
  imports: [
    BrowserModule,
    AdminModule,
    PublicModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,

  ],
  providers: [AdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
