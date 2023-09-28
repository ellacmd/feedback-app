import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
 
})
export class SidebarComponent  implements OnInit {
  ngOnInit() {

  }

  categories: string[] = ['All', 'UI', 'UX', 'Enhancement', 'Bug', 'Feature'];
  selectedCategory: string = 'All';
  handleClick(clickedCategory: string ) {
  
    this.selectedCategory = clickedCategory;
  }


}
