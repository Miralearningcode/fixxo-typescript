import { useContext, useState } from "react"
import { createContext } from "react"
import { ProductContextProps } from "../models/ProductContextModel"
import { ProductItem } from "../models/ProductModels"

const getData = async () => {
    const result = await fetch ('http://localhost:5000/api/products')
    const data = await result.json()
}

getData()

interface ProductProviderProps{
    children: any
}


export const ProductContext = createContext<ProductContextProps | null>(null)
export const useProductContext = () => { return useContext(ProductContext)}

const ProductProvider: React.FC<ProductProviderProps> = ({children}) => {
    const baseUrl:string = 'http://localhost:5000/api/products'
    const empty_product_values: ProductItem = { tag: '', articleNumber: '', name: '', description: '', category: '', price: 0, imageName: ''}

    const [product, setProduct] = useState<ProductItem>(empty_product_values)
    const [products, setProducts] = useState<ProductItem[]>([])
    const [featuredProducts, setFeaturedProducts] = useState<ProductItem[]>([])
    const [flashsaleProductsLeft, setFlashsaleProductsLeft] = useState<ProductItem[]>([])
    const [flashsaleProductsRight, setFlashsaleProductsRight] = useState<ProductItem[]>([])
    
    const getProduct = async (articleNumber?: string) => {    //get Hämtar en specifik produkt
        if (articleNumber !== undefined) {
            const res = await fetch (`${baseUrl}/details/product/${articleNumber}`)  //Fetch & Await är det enda som har med api:et att göra
            setProduct(await res.json())
        }   
    }

    const getProducts = async () => {   //getAll Hämtar alla produkter
        const res = await fetch(baseUrl)
        setProducts(await res.json())
    }

    const getFeaturedProducts = async (take: number = 0) => {
        let url = ` ${baseUrl}/featured`

        if (take !== 0)
            url += `/${take}`

        const res = await fetch(url)
        setFeaturedProducts(await res.json())
    }

    const getFlashsaleProductsLeft = async (take: number = 0) => {
        let url = ` ${baseUrl}/flashsale_left`

        if (take !== 0)
            url += `/${take}`

        const res = await fetch(url)
        setFlashsaleProductsLeft(await res.json())
    }

    const getFlashsaleProductsRight = async (take: number = 0) => {
        let url = ` ${baseUrl}/flashsale_right`

        if (take !== 0)
            url += `/${take}`

        const res = await fetch(url)
        setFlashsaleProductsRight(await res.json())
    }


    // const getFlashsaleProducts = async (take: number = 0) => {
    //     let url = baseUrl + `?tag=flashsale`

    //     if (take !== 0)
    //         url += `&take=${take}`

    //     const res = await fetch(url)
    //     setFlashsaleProducts(await res.json())
    // }





    return <ProductContext.Provider value={{product, products, featuredProducts, flashsaleProductsLeft, flashsaleProductsRight, getProduct, getProducts, getFeaturedProducts, getFlashsaleProductsLeft, getFlashsaleProductsRight}}>
        {children}
    </ProductContext.Provider>
}

export default ProductProvider

