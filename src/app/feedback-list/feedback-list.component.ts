import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FeedbackComponent } from '../feedback/feedback.component';
import { NoFeedbackComponent } from '../no-feedback/no-feedback.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feedback-list',
  templateUrl: './feedback-list.component.html',
  styleUrls: ['./feedback-list.component.css'],
  imports: [MatFormFieldModule, MatSelectModule, FeedbackComponent, NoFeedbackComponent, RouterLink, CommonModule],
  standalone:true,
})
export class FeedbackListComponent {

}
