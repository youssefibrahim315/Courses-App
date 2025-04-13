import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CoursesService } from '../../core/services/courses.service';
import { CartService } from '../../core/services/cart.service';
import { RouterModule } from '@angular/router';
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
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss'
})
export class ShoppingCartComponent {
    coursesService = inject(CoursesService);
    cartService = inject(CartService);
  courses: Course[] = this.cartService.getCartItems();

  get totalPrice(): number {
    return this.cartService.getCartItems().reduce((sum, course) => sum + course.price, 0);
  }

  get totalDiscount(): number {
    return this.cartService.getCartItems().reduce((sum, course) => sum + course.discount, 0);
  }

  get tax(): number {
    return 20;
  }

  get total(): number {
    return this.totalPrice  + this.tax - this.totalDiscount;
  }

  removeCourse(index: number): void {
    this.courses.splice(index, 1);
  }
}
