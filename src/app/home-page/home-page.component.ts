import { Component, OnInit, inject } from '@angular/core';
import { NgClass, NgForOf } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { NoFeedbackComponent } from '../no-feedback/no-feedback.component';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FeedbackComponent } from '../feedback/feedback.component';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GlobalService } from '../global.service';
import { ProductRequest } from '../types/product-request';
import { User } from '../types/user';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  imports: [
    MatIconModule,
    NgClass,
    NgForOf,
    NoFeedbackComponent,
    MatFormFieldModule,
    MatSelectModule,
    FeedbackComponent,
    NoFeedbackComponent,
    RouterLink,
    CommonModule,
    MatProgressSpinnerModule,
  ],
  standalone: true,
})
export class HomePageComponent {
  categories: string[] = ['All', 'UI', 'UX', 'Enhancement', 'Bug', 'Feature'];
  selectedCategory: string = 'All';
  showSpinner: boolean;

  user: User = JSON.parse(localStorage.getItem('user') || '{}');
  name =
    this.user?.user?.firstname?.charAt(0) +
    this.user?.user?.firstname?.substring(1).toLowerCase();

  handleClick(clickedCategory: string) {
    this.selectedCategory = clickedCategory;
    if (clickedCategory === 'All') {
      this.updatedProductRequestList = this.productRequestList;
      return;
    }
    this.updatedProductRequestList = this.productRequestList?.filter(
      (request) => {
        return request.category.toLowerCase() === clickedCategory.toLowerCase();
      }
    );
  }

  sortRequests(value: string) {
    if (value === 'most-upvotes') {
      this.updatedProductRequestList?.sort((a, b) => b.upvotes - a.upvotes);
    }
    if (value === 'least-upvotes') {
      this.updatedProductRequestList?.sort((a, b) => a.upvotes - b.upvotes);
    }
    if (value === 'most-comments') {
      this.updatedProductRequestList?.sort(
        (a, b) => b.commentCount - a.commentCount
      );
    }
    if (value === 'least-comments') {
      this.updatedProductRequestList?.sort(
        (a, b) => a.commentCount - b.commentCount
      );
    }
  }

  productRequestList: ProductRequest[] | undefined;
  updatedProductRequestList: ProductRequest[] | undefined;

  globalService: GlobalService = inject(GlobalService);
  constructor() {
    this.globalService.getAllProductRequests().subscribe((apiResponse: any) => {
      // this.showSpinner = this.globalService.isLoading
      this.productRequestList = apiResponse.productRequests;
      this.updatedProductRequestList = this.productRequestList;
    });
  }

  logout() {
    localStorage.removeItem('user');
    window.location.reload();
  }
}
