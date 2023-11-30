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
        shirts: {
            data: Shirts[]
        }
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

type Sizes = {
    id: string,
    attributes: {
        name: string
    }
}

type Shirts = {
    id: string,
    attributes: {
        sizes: {
            data: Sizes[]
        }
    }
}