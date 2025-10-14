import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CouponService } from '../../services/coupon.service';
import { Coupon } from '../../models/coupon';
import { CouponCardComponent } from '../../components/coupon-card/coupon-card.component';

@Component({
  selector: 'app-coupon-list',
  standalone: true,
  imports: [CommonModule, FormsModule, CouponCardComponent],
  templateUrl: './coupon-list.component.html',
  styleUrl: './coupon-list.component.css'
})
export class CouponListComponent implements OnInit {
  coupons: Coupon[] = [];
  filteredCoupons: Coupon[] = [];
  categories: string[] = [];
  selectedCategory: string = '';
  searchQuery: string = '';

  constructor(
    private couponService: CouponService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadCoupons();
    this.categories = this.couponService.getCategories();
  }

  loadCoupons(): void {
    this.coupons = this.couponService.getCoupons();
    this.applyFilters();
  }

  applyFilters(): void {
    this.filteredCoupons = this.coupons.filter(coupon => {
      const matchesCategory = !this.selectedCategory || 
                             coupon.category === this.selectedCategory;
      const matchesSearch = coupon.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                           coupon.code.toLowerCase().includes(this.searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }

  onCategoryChange(): void {
    this.applyFilters();
  }

  onSearchChange(): void {
    this.applyFilters();
  }

  onCouponClick(id: number): void {
    this.router.navigate(['/coupons', id]);
  }

  goToCreate(): void {
    this.router.navigate(['/coupons/create']);
  }
}