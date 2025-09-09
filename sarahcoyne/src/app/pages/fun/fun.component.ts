import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavButtonsComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-fun',
  standalone: true,
  imports: [CommonModule, NavButtonsComponent],
  templateUrl: './fun.component.html',
  styleUrls: ['./fun.component.css'],
})
export class FunComponent {
  photos = [
    { src: 'sarah_running.JPG', caption: 'Racing the mile at Last Chance Invite' },
    // { src: 'assets/images/sarah-headshot.jpeg', caption: "Caption" },
    // { src: 'assets/images/sarah-headshot.jpeg', caption: 'Caption' },
    // { src: 'assets/images/waffles.JPG', caption: 'Caption' },
    // { src: 'assets/images/waffles.JPG', caption: 'Caption' },
    // { src: 'assets/images/sarah-headshot.jpeg', caption: 'Caption' },
    // { src: 'assets/images/sarah-headshot.jpeg', caption: 'Caption' },
    // { src: 'assets/img/maine.JPG', caption: 'Caption' },
    // { src: 'assets/img/family.JPG', caption: 'Caption' },
  ];
}
