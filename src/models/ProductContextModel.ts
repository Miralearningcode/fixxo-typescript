import { ProductItem } from "./ProductModels"


export interface ProductContextProps {
    product: ProductItem
    products: ProductItem[]
    featuredProducts: ProductItem[]
    flashsaleProducts: ProductItem[]
    getProduct: (articleNumber?: string) => void
    getProducts: () => void
    getFeaturedProducts: (take?: number) => void
    getFlashsaleProducts: (take?: number) => void
}