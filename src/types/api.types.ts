export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    discountPercentage: number;
    thumbnail: string;
    images: string[];
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