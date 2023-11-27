export type Product = {
    name: string,
    description: string,
    price: number,
    descount: number,
    rate: number,
    createdAt: string,
    updatedAt: string,	
    publishedAt: string
}

export type Products = {
    id: number,
    attributes: Product
}

export type Data = {
    data: Products
}