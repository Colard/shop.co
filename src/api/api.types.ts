export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    discountPercentage: string;
    thumbail: string;
    images: string[];
    tags: string[];
    warrantyInformation: string;
    shippingInformation: string;
    returnPolicy: string;
    rating: number;
    availabilityStatus: string;
    rewiews: Review[];
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