export interface Product { // hämta produkt
    articleNumber: number
    name: string
    description?: string   
    category: string
    price: number
    rating: number
    imageName: string
}

export interface ProductRequest{ // skapa produkt
    articleNumber: number
    name: string
    description?: string   
    category: string
    price: number
    rating: number
    imageName: string
}