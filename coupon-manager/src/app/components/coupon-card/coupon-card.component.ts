import { Component, Input, Output, EventEmitter } from '@angular/core';
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
  @Input() coupon!: Coupon;
  @Output() cardClicked = new EventEmitter<number>();

  onClick(): void {
    this.cardClicked.emit(this.coupon.id);
  }

  isExpired(): boolean {
    return new Date(this.coupon.expiryDate) < new Date();
  }
}