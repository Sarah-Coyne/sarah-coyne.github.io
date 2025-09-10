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
    { src: 'assets/images/sisters.jpeg', caption: 'I have two sisters! Anna is my older sister and Megan is my twin, they helped me with this website. They are super awesome :)' },
    { src: 'assets/images/Miel.jpeg', caption: 'Food science people have the best coffee orders, my go to is a Cafe Miel!' },
    { src: 'assets/images/Waffles.jpeg.jpeg', caption: 'I have a dog named Waffles, she is a huge diva and loves being outside!' },
    { src: 'assets/images/Gameday1.jpeg', caption: 'I am a huge sports fan and love gamedays in East Lansing' },
    { src: 'assets/images/Tomatoes.JPG', caption: 'My family grows lots of beautiful tomatoes every year and they are so delicious!' },
    { src: 'assets/images/Sarah_hiking.jpeg', caption: 'I love hiking with my family. This summer we hiked the narrows in Zion!' },
    { src: 'assets/images/Family.jpeg', caption: 'Thank you for spending time getting to know me and my love for food and science!' },
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
