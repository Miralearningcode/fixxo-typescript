import { ProductItem } from "./ProductModels"

export interface CartItem {
    articleNumber: string
    product: ProductItem
    quantity: number
}