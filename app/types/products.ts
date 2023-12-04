export interface Products {
    data: {
        products: {
            data: Product[]
        }
    }
}

type Product = {
    id: string,
    attributes: {
        product_name: string,
        price: number,
        category: {
            data: {
                id: string,
                attributes: {
                    cattegory_name: string
                }
            }
        }
    }
}