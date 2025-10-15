import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CouponService } from '../../services/coupon.service';
import { Coupon } from '../../models/coupon';
import { FormsModule } from '@angular/forms';
import { CouponCardComponent } from '../../components/coupon-card/coupon-card.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coupon-list',
  standalone: true,
  imports: [CommonModule, FormsModule, CouponCardComponent],
  templateUrl: './coupon-list.component.html',
  styleUrl: './coupon-list.component.css'
})
export class CouponListComponent implements OnInit {
  coupons: Coupon[] = [];
  flag: boolean = false;
  imgUrl: string = 'https://picsum.photos/200/300';
  name: string = '';

  constructor(private router: Router, private couponService: CouponService) { }
  
  ngOnInit() {
    console.log('CouponListComponent initialized', this.coupons);
    this.coupons = this.couponService.getCoupons();
  }

  handleClick() {
    console.log('Button clicked');
  }

  deleteCoupon(coupon: Coupon) { 
    console.log('parent: delete coupon', coupon);
  }

  navigateToCreateCoupon() {
    this.router.navigate(['/coupons/create']);
  }
} 