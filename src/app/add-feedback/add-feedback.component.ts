import { Component, inject } from '@angular/core';
import { Location, NgIf } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { GlobalService } from '../global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-feedback',
  templateUrl: './add-feedback.component.html',
  styleUrls: ['./add-feedback.component.css'],
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, ReactiveFormsModule, NgIf],
})
export class AddFeedbackComponent {
  globalService = inject(GlobalService);

  constructor(private location: Location, private router: Router) {}
  goBackToPrevPage(): void {
    this.location.back();
  }

  addFeedbackForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
  });
  addFeedbackError: string;
  addFeedback() {
    this.globalService
      .addProductRequest(
        this.addFeedbackForm.value.title ?? '',
        this.addFeedbackForm.value.category ?? '',
        this.addFeedbackForm.value.description ?? ''
      )
      .subscribe({
        next: () => {
          this.router.navigate(['']).then(() => window.location.reload());
        },
        error: ({ error }) => {
          this.addFeedbackError = error.message;
        },
      });
  }

  get title() {
    return this.addFeedbackForm.get('title');
  }

  get description() {
    return this.addFeedbackForm.get('description');
  }
}
