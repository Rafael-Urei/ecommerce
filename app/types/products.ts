import { Product } from "./product"

export interface Products {
    data: {
        products: {
            data: Product[]
        }
    }
}