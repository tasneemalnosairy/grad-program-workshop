import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Coupon } from '../../models/coupon';
@Component({
  selector: 'app-coupon-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './coupon-card.component.html',
  styleUrl: './coupon-card.component.css'
})
export class CouponCardComponent {
  @Input() coupon: Coupon | undefined;
  @Output() deleteCouponEvent = new EventEmitter<Coupon>();
  
  deleteCoupon() {
    console.log('delete coupon');
    this.deleteCouponEvent.emit(this.coupon);
  }
}