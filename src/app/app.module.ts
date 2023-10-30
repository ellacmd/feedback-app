import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FeedbackComponent } from './feedback/feedback.component';
import { NoFeedbackComponent } from './no-feedback/no-feedback.component';
import { FeedbackDetailComponent } from './feedback-detail/feedback-detail.component';
import { HomePageComponent } from './home-page/home-page.component';
import { EditFeedbackComponent } from './edit-feedback/edit-feedback.component';
import { AddFeedbackComponent } from './add-feedback/add-feedback.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoadmapComponent } from './roadmap/roadmap.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [AppComponent, NotFoundComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    EditFeedbackComponent,
    RoadmapComponent,
    AddFeedbackComponent,
    FeedbackComponent,
    NoFeedbackComponent,
    HomePageComponent,
    LoginComponent,
    FeedbackDetailComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
