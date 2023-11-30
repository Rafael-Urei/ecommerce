export interface Product {
    id: string
    attributes: {
        name: string,
        price: number,
        description: string
    }
}

export interface FilteredProduct {
    id: string
    attributes: {
        name: string,
        price: number,
        description: string,
        category: {
            data: {
                id: string,
                attributes: {
                    name: string
                }
            }
        }
    }
}