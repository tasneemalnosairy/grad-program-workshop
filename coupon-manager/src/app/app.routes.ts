import { Routes } from '@angular/router';
import { CouponListComponent } from './pages/coupon-list/coupon-list.component';
import { CreateCouponComponent } from './pages/create-coupon/create-coupon.component';

export const routes: Routes = [
  { path: '', redirectTo: '/coupons', pathMatch: 'full' },
  { path: 'coupons', component: CouponListComponent },
  { path: 'coupons/create', component: CreateCouponComponent },
];