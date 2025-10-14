import { Injectable } from '@angular/core';
import { Coupon } from '../models/coupon';

@Injectable({
  providedIn: 'root'
})
export class CouponService {
  private coupons: Coupon[] = [
    {
      id: 1,
      title: "Summer Pizza Special",
      description: "Get 20% off on all large pizzas",
      discount: 20,
      code: "PIZZA20",
      expiryDate: "2025-12-31",
      isActive: true,
      category: "Food",
      usageLimit: 100,
      usedCount: 45
    },
    {
      id: 2,
      title: "Buy One Get One Burger",
      description: "Purchase any burger and get another free",
      discount: 50,
      code: "BOGO50",
      expiryDate: "2025-11-30",
      isActive: true,
      category: "Food",
      usageLimit: 50,
      usedCount: 30
    },
    {
      id: 3,
      title: "Electronics Mega Sale",
      description: "Huge discounts on tech products",
      discount: 35,
      code: "TECH35",
      expiryDate: "2025-10-10",
      isActive: false,
      category: "Electronics",
      usageLimit: 200,
      usedCount: 180
    },
    {
      id: 4,
      title: "Fashion Friday",
      description: "15% off on clothing",
      discount: 15,
      code: "FASHION15",
      expiryDate: "2026-03-20",
      isActive: true,
      category: "Fashion",
      usageLimit: 500,
      usedCount: 12
    }
  ];

  getCoupons(): Coupon[] {
    return this.coupons;
  }

  getCouponById(id: number): Coupon | undefined {
    return this.coupons.find(c => c.id === id);
  }

  addCoupon(coupon: Omit<Coupon, 'id'>): void {
    const newCoupon = {
      ...coupon,
      id: Date.now()
    };
    this.coupons.push(newCoupon);
  }

  deleteCoupon(id: number): void {
    this.coupons = this.coupons.filter(c => c.id !== id);
  }

  getCategories(): string[] {
    return ['Food', 'Electronics', 'Fashion', 'Travel', 'Entertainment'];
  }
}