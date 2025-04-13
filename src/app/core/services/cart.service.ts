import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems: any[] = [];
  private cartSubject = new BehaviorSubject<any[]>([]);

  cart$ = this.cartSubject.asObservable();

  addToCart(course: any) {
    const exists = this.cartItems.find(c => c.id === course.id);
    if (!exists) {
      this.cartItems.push(course);
      this.cartSubject.next(this.cartItems);
    }else{

      const i =this.cartItems.indexOf(course);
      this.cartItems.splice(i,1);

    }
  }
  existsInCart(course: any){
    return this.cartItems.find(c => c.id === course.id);

  }
  getCartItems() {
    return this.cartItems;
  }

  removeFromCart(id: string) {
    this.cartItems = this.cartItems.filter(item => item.id !== id);
    this.cartSubject.next(this.cartItems);
  }

  clearCart() {
    this.cartItems = [];
    this.cartSubject.next([]);
  }
}
