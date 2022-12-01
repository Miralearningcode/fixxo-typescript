export interface Product { // hämta produkt  User
    //UserModel börjar med id: number
    id: number
    articleNumber: string
    name: string
    description?: string   //ha description?: string   ?
    category: string
    price: number
    rating: number
    imageName: string
}

export interface ProductRequest{ // skapa produkt  UserRequest
    articleNumber: string
    name: string
    description?: string   
    category: string
    price: number
    rating: number
    imageName: string
}