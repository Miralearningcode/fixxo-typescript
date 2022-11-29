import { ProductItem } from "./ProductModels"


export interface ProductContextProps {
    product: ProductItem
    products: ProductItem[]
    featuredProducts: ProductItem[]
    flashsaleProducts: ProductItem[]
    getProduct: (articleNumber?: string) => void
    getProducts: (take?: number) => void
    getFeaturedProducts: (take?: number) => void
    getFlashsaleProducts: (take?: number) => void
}