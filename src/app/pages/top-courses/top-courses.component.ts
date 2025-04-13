import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoursesService } from '../../core/services/courses.service';
import { forkJoin } from 'rxjs';
import { CartService } from '../../core/services/cart.service';
interface Course {
  id: string;
  hours: number;
  image: string;
  level: string;
  price: number;
  title: string;
  author: string;
  category: string;
  discount: number;
  lectures: number;
  addToCart: boolean;
  categoryID: number;
  description: string;
  ratingCount: number;
  showOnHomepage: boolean;
  badgeColor?: string;
  ratings?:number;
}


@Component({
  selector: 'app-top-courses',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './top-courses.component.html',
  styleUrl: './top-courses.component.scss'
})
export class TopCoursesComponent implements OnInit{
  coursesService = inject(CoursesService);
  cartService = inject(CartService);

  categories = [];
  selectedCategory = signal('All');
  ngOnInit(): void {
    this.loadData();
  }

  courses: Course[] = [];

  get filteredCourses(): Course[] {
    const cat = this.selectedCategory();
    return cat === 'All' ? this.courses : this.courses.filter(c => c.category === cat);
  }

  selectCategory(category: string) {
    this.selectedCategory.set(category);
  }

  loadData(): void {
    forkJoin({
      courses: this.coursesService.coursesList(),
      categories: this.coursesService.categoriesList()
    }).subscribe({
      next: (results) => {
        console.log("🚀 ~ TopCoursesComponent ~ loadData ~ results:", results)
        this.courses = results.courses.Courses;
        this.categories = results.categories.Categories.map((c:any)=>c.name);
      },
      error: (err) => {
        console.error('Error loading data:', err);
      }
    });
  }

}
