import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CouponService } from '../../services/coupon.service';

@Component({
  selector: 'app-create-coupon',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-coupon.component.html',
  styleUrl: './create-coupon.component.css'
})
export class CreateCouponComponent {
  categories: string[] = [];

  coupon = {
    title: '',
    description: '',
    discount: 0,
    code: '',
    expiryDate: '',
    isActive: true,
    category: '',
    usageLimit: 1,
    usedCount: 0
  };

  constructor(
    private couponService: CouponService,
    private router: Router
  ) {
    this.categories = this.couponService.getCategories();
  }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      this.couponService.addCoupon(this.coupon);
      this.router.navigate(['/coupons']);
    } else {
      Object.keys(form.controls).forEach(key => {
        form.controls[key].markAsTouched();
      });
    }
  }

  onCancel(): void {
    this.router.navigate(['/coupons']);
  }
}