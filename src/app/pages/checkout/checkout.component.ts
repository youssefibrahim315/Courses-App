import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
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
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule,RouterModule,FormsModule,ReactiveFormsModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent {
  cartService = inject(CartService);
  courses: Course[] = this.cartService.getCartItems();
  
  fb = inject(FormBuilder)
  checkoutForm: FormGroup = this.initForm();

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

  onSubmit(): void {
    this.checkoutForm.markAllAsTouched();
    if (this.checkoutForm.valid) {

    } 
  }
  initForm(): FormGroup {
    return this.fb.group({
      country: ['', Validators.required],
      state: ['', Validators.required],
      cardName: ['', Validators.required],
      cardNumber: ['', [Validators.required, Validators.pattern(/^\d{16}$/)]],
      expiry: ['', Validators.required],
      cvc: ['', [Validators.required, Validators.pattern(/^\d{3,4}$/)]],
    });
  }
}


