export interface Product { // hämta produkt  User
    //UserModel börjar med id: number
    articleNumber: number
    name: string
    description?: string   //ha description?: string   ?
    category: string
    price: number
    rating: number
    imageName: string
}

export interface ProductRequest{ // skapa produkt  UserRequest
    articleNumber: number
    name: string
    description?: string   
    category: string
    price: number
    rating: number
    imageName: string
}