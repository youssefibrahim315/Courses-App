import { Component } from '@angular/core';
import { TopCoursesComponent } from "../top-courses/top-courses.component";
import { MediaGalleryComponent } from "../media-gallery/media-gallery.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TopCoursesComponent, MediaGalleryComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
