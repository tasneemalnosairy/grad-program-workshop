import { Component, ViewChild, viewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule } from '@angular/forms';
import { Coupon } from '../../models/coupon';
@Component({
  selector: 'app-create-coupon',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-coupon.component.html',
  styleUrl: './create-coupon.component.css'
})
export class CreateCouponComponent {
  @ViewChild('createCouponForm') createCouponForm: FormGroup | undefined;
  coupon: Coupon = {
    id: 0,
    title: '',
    description: '',
    discount: 0,
    code: '',
    expiryDate: '',
    isActive: false,
    category: '',
    usageLimit: 0,
    usedCount: 0
  };
  constructor() { }

  createCoupon() {
    console.log('create coupon form', this.createCouponForm);
    if (this.createCouponForm?.valid) {
      console.log('create coupon', this.coupon);
    }
    else {
      console.log('create coupon form is invalid');
    }
  }

}