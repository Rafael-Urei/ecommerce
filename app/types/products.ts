export interface Product {
    data: {
        id: number,
        attributes: ProductAttributes
    }
}

type ProductAttributes = {
    name: string,
    description: string,
    price: number,
    rate: number,
    descount: number,
    createdAt: string,
    updatedAt: string,
    publishedAt: string,
    variants: {
        data: Variant[]
    }
    reviews: {
        data: Review[]
    }
}

type Review = {
    id: number,
    attributes: {
        reviewer: string,
        review: string
    }
}

type Variant = {
    id: number,
    attributes: {
        size: string,
        descount: number,
        createdAt: string,
        updatedAt: string,
        publishedAt: string,
        storage: number,
    }
    
}