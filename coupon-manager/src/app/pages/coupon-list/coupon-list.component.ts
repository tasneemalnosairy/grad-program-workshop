import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CouponService } from '../../services/coupon.service';

@Component({
  selector: 'app-coupon-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './coupon-list.component.html',
  styleUrl: './coupon-list.component.css'
})
export class CouponListComponent {
  constructor(private couponService: CouponService) { }
}