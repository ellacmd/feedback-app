import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedbackDetailComponent } from './feedback-detail/feedback-detail.component';

import { HomePageComponent } from './home-page/home-page.component';
import { AddFeedbackComponent } from './add-feedback/add-feedback.component';
import { EditFeedbackComponent } from './edit-feedback/edit-feedback.component';
import { RoadmapComponent } from './roadmap/roadmap.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    title: 'Feedback Board',
  },
  {
    path: 'details/:1',
    component: FeedbackDetailComponent,
    title: 'Feedback Details',
  },
  {
    path: 'add-feedback',
    component: AddFeedbackComponent,
    title: 'Add Feedback',
  },
  {
    path: 'edit-feedback/:1',
    component: EditFeedbackComponent,
    title: 'Edit feedback',
  },
  {
    path: 'roadmap',
    component: RoadmapComponent,
    title: 'Roadmap',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
