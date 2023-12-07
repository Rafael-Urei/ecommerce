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
        variants: {
            data: Variants[]
        }
        reviews: {
            data: Reviews[]
        }
        product_images: {
            data: ProductImages[]
        }
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

type Variants = {
    id: string,
    attributes: {
        sale: boolean,
        descount: number
    }
}

type Reviews = {
    id: string,
    attributes: {
        rate: number,
        review: string,
        reviewer: string
    }
}

type ProductImages = {
    id: string
    attributes: {
        url: string
        formats: {
            thumbnail: FormatImg,
            large: FormatImg
            medium: FormatImg
            small: FormatImg
        }
    }
}

type FormatImg = {
    name: string,
    hash: string,
    ext: string
    mime: string
    path: null
    width: number
    height: number
    size: number
    url: string
}