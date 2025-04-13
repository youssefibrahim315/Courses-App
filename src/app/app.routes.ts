import { Routes } from '@angular/router';
import { courseDetailsResolver } from './core/resolvers/course-details.resolver';
export const routes: Routes = [
    {
        path: '',loadComponent: () => import('./pages/home/home.component').then(c => c.HomeComponent)
    },
    {
        path: 'courses-details/:id',loadComponent: () => import('./pages/courses-details/courses-details.component').then(c => c.CoursesDetailsComponent),
        resolve: {data: courseDetailsResolver}
    },
    {
        path: 'shopping-cart',loadComponent: () => import('./pages/shopping-cart/shopping-cart.component').then(c => c.ShoppingCartComponent)
    },
    {
        path: 'checkout',loadComponent: () => import('./pages/checkout/checkout.component').then(c => c.CheckoutComponent)
    },
    {
        path: 'order-complete',loadComponent: () => import('./pages/order-complete/order-complete.component').then(c => c.OrderCompleteComponent)
    },
];
