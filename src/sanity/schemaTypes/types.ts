// types.ts (or types/product.ts if you prefer to split them)
export interface Product {
    _id: string;
    name: string;
    price: number;
    description: string;
    discountPercent: number;
    imgUrl: string;
    colors?: string[];
    sizes?: string[];
    tags?: string[];
  }
  