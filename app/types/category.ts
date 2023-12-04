export interface ProductsByCategory {
    data: {
        category: {
            data: {
                id: string,
                attributes: {
                    cattegory_name: string,
                    products: {
                        data: Product[]
                    }
                }
            }
        }
    }
}

type Product = {
    id: string,
    attributes: {
        product_name: string,
        price: number
    }
}