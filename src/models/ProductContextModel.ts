import { ProductItem } from "./ProductModels"


export interface ProductContextProps {
    product: ProductItem
    products: ProductItem[]
    featuredProducts: ProductItem[]
    flashsaleProductsLeft: ProductItem[]
    flashsaleProductsRight: ProductItem[]
    getProduct: (articleNumber?: string) => void
    getProducts: () => void
    getFeaturedProducts: (take?: number) => void
    getFlashsaleProductsLeft: (take?: number) => void
    getFlashsaleProductsRight: (take?: number) => void
}