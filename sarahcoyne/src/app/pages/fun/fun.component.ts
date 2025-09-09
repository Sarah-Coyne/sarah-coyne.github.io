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
    { src: 'assets/images/running.jpg', caption: 'I have been a competitive distance runner for 12 years and my favorite event is the mile!' },
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
