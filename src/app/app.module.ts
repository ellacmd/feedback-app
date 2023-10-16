import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FeedbackListComponent } from './feedback-list/feedback-list.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { NoFeedbackComponent } from './no-feedback/no-feedback.component';
import { FeedbackDetailComponent } from './feedback-detail/feedback-detail.component';
import { HomePageComponent } from './home-page/home-page.component';
import { EditFeedbackComponent } from './edit-feedback/edit-feedback.component';
import { AddFeedbackComponent } from './add-feedback/add-feedback.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoadmapComponent } from './roadmap/roadmap.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,

   
    FeedbackDetailComponent,
    HomePageComponent,
 
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    EditFeedbackComponent,
    RoadmapComponent,
    AddFeedbackComponent,
    FeedbackListComponent,
  
    FeedbackComponent,
    NoFeedbackComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]

})
export class AppModule { }
