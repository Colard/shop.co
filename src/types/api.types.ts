export type ProductResponse = {
  products: Product[] | null;
  total: number;
  skip: number;
  limit: number;
  maxPrice: number;
  minPrice: number;
};

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  discountPercentage: number;
  thumbnail: string;
  images: string[];
  category: string;
  tags: string[];
  warrantyInformation: string;
  shippingInformation: string;
  returnPolicy: string;
  rating: number;
  availabilityStatus: string;
  reviews: Review[];
  meta: Meta;
}

export interface Review {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
}

export interface Meta {
  createdAt: string;
  updatedAt: string;
}

export type TOrder = "asc" | "desc";

export interface FilterParams {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  minRating?: number;
  maxRating?: number;
  select?: (keyof Product)[];
  sortBy?: keyof Product;
  order?: TOrder;
  limit?: number;
  skip?: number;
}

export interface ProductCategory {
  slug: string;
  name: string;
  url: string;
}
