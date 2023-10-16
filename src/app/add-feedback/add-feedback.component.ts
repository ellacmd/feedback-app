import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';


@Component({
  selector: 'app-add-feedback',
  templateUrl: './add-feedback.component.html',
  styleUrls: ['./add-feedback.component.css'],
  standalone:true,
  imports: [MatFormFieldModule, MatSelectModule],
})
export class AddFeedbackComponent {
  constructor(private location: Location) {}
  goBackToPrevPage(): void {
    this.location.back();

  }
  selectedCategory = 'ui';
  selectedStatus='suggestion'
}
