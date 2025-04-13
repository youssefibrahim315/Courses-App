import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CartService } from '../../core/services/cart.service';
import { CommonModule } from '@angular/common';
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
  languages?:any;
  originalPrice?:any;
  totalHours?:any;
  imageUrl?:any;
  
}

@Component({
  selector: 'app-courses-details',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './courses-details.component.html',
  styleUrl: './courses-details.component.scss'
})
export class CoursesDetailsComponent {
  cartService = inject(CartService);


  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe(({ course }) => {
      console.log("🚀 ~ CoursesDetailsComponent ~ courses:", course)
    })
  }

  course:Course = {
    title: 'Full Stack Web Development',
    description: `Learn to build dynamic web applications from the ground up. This course covers HTML, CSS,
      JavaScript, and backend technologies like Node.js and Express. You'll also explore databases
      with MongoDB and gain experience in deploying applications.`,
    totalHours: 22,
    lectures: 155,
    level: 'Beginner',
    author: 'Jane Doe',
    languages: ['English', 'Spanish', 'Italian', 'German'],
    price: 199.9,
    originalPrice: 209.9,
    discount: 10,
    imageUrl: 'https://i.postimg.cc/DfNJZ1JC/full-stack.png',
    id: '',
    hours: 0,
    image: '',
    category: '',
    addToCart: false,
    categoryID: 0,
    ratingCount: 0,
    showOnHomepage: false
  };

  get lang(): string {
    return this.course.languages.join(', ');
  }

  get price(): number {
    return this.course.price;
  }

  get originalPrice(): string {
    return this.course.originalPrice;
  }

  get discount(): any {
    return this.course.discount;
  }
}
