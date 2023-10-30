import { Component, Input } from '@angular/core';

import { ProductRequest } from '../types/product-request';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css'],
  standalone: true,
})
export class FeedbackComponent {
  @Input() productRequest: ProductRequest;

  upvote(event: any) {
    console.log(event);
    event.stopPropagation();
  }
}
