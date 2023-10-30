import { Component, inject } from '@angular/core';
import { GlobalService } from '../global.service';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductRequest } from '../types/product-request';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-feedback-detail',
  templateUrl: './feedback-detail.component.html',
  styleUrls: ['./feedback-detail.component.css'],
  standalone: true,
  imports: [NgIf, RouterLink, FormsModule],
})
export class FeedbackDetailComponent {
  feedbackDetails: ProductRequest = history.state;

  isFeedbackPoster: boolean;

  globalService: GlobalService = inject(GlobalService);

  value: string = '';

  constructor() {
    this.globalService
      .getSingleProductRequest(this.feedbackDetails.id)
      .subscribe({
        next: ({ productRequest }: any) => {
          this.feedbackDetails = productRequest;
          this.isFeedbackPoster =
            this.feedbackDetails.user === this.globalService.user.user.id;
        },
      });
  }

  valueChange(value: string) {
    this.globalService.postComment(this.value).subscribe({
      next: (res) => {
        console.log(res);
      },
    });
  }
}
