import { FilteredProduct, Product } from "./product"

export interface Products {
    data: {
        products: {
            data: Product[]
        }
    }
}

export interface SingleProduct {
    data: {
        product: {
            data: FilteredProduct
        }
    }
}