export interface Coupon {
    id: number;
    title: string;
    description: string;
    discount: number;
    code: string;
    expiryDate: string;
    isActive: boolean;
    category: string;
    usageLimit: number;
    usedCount: number;
}