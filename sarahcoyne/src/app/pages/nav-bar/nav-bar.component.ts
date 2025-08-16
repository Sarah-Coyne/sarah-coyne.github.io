import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-nav-buttons',
  standalone: true, 
  imports: [CommonModule, RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavButtonsComponent {
  pages = [
    { name: "🍒 Home 🍒", url: "/" },
    { name: "🥑 Resume/CV 🥑", url: "/resume" },
    { name: "🥭 Projects 🥭", url: "/projects" },
    { name: "🍇 Interests 🍇", url: "/interests" },
    { name: "🍉 Fun 🍉", url: "/fun" }
  ];

  isMenuOpen = false;

  constructor(public router: Router) {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  getLinkClasses(url: string): string {
    return this.router.url === url
      ? 'bg-herb text-lab font-semibold'
      : 'hover:bg-herb hover:text-lab';
  }

  // Close menu if click is outside
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;

    // Only close if click is outside the menu button/dropdown
    if (!target.closest('.menu-container')) {
      this.isMenuOpen = false;
    }
  }
}
