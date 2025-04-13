import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-media-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './media-gallery.component.html',
  styleUrl: './media-gallery.component.scss'
})
export class MediaGalleryComponent {
  images = [
    './imgs/2.svg',
    './imgs/3.svg',
    './imgs/4.svg',
    './imgs/1.svg',
    './imgs/5.svg',
    './imgs/1.svg',
    './imgs/2.svg',
    './imgs/3.svg'
  ];

  currentIndex = 3;

  goNext() {
    if (this.currentIndex < this.images.length - 1) {
      this.currentIndex++;
    }
  }

  goPrev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  getImage(index: number) {
    return this.images[index] ?? null;
  }
}
