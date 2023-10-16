import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

import {
  CdkDragDrop,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-roadmap',
  templateUrl: './roadmap.component.html',
  styleUrls: ['./roadmap.component.css'],
  standalone: true,
  imports: [CdkDropListGroup, CdkDropList, NgFor, CdkDrag, RouterLink],
})
export class RoadmapComponent {
  
  planned = [
    {
      status: 'Planned',
      title: 'More comprehensive reports',
      description:
        'It would be great to see a more detailed breakdown of solutions.',
      category: 'Feature',
      upvotes: '123',
      comments: '2',
    },
    {
      status: 'Planned',
      title: 'Learning paths',
      description:
        'Sequenced projects for different goals to help people improve.',
      category: 'Feature',
      upvotes: '28',
      comments: '1',
    },
  ];

  inProgress = [
    {
      status: 'In Progress',
      title: 'One-click portfolio generation',
      description:
        'Add ability to create professional looking portfolio from profile.',
      category: 'Feature',
      upvotes: '62',
      comments: '1',
    },
    {
      status: 'In Progress',
      title: 'Bookmark challenges',
      description: 'Be able to bookmark challenges to take later on.',
      category: 'Feature',
      upvotes: '31',
      comments: '1',
    },
    {
      status: 'In Progress',
      title: 'Animated solution screenshots',
      description:
        'Screenshots of solutions with animations don’t display correctly.',
      category: 'Bug',
      upvotes: '9',
      comments: '0',
    },
  ];
  live = [
    {
      status: 'Live',
      title: 'Add micro-interactions',
      description: 'Small animations at specific points can add delight.',
      category: 'Enhancement',
      upvotes: '71',
      comments: '2',
    },
  ];

  drop(event: CdkDragDrop<any>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
