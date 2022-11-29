import { useContext, useState } from "react"
import { createContext } from "react"
import { ProductContextProps } from "../models/ProductContextModel"
import { ProductItem } from "../models/ProductModels"


interface ProductProviderProps{
    children: any
}


export const ProductContext = createContext<ProductContextProps | null>(null)
export const useProductContext = () => { return useContext(ProductContext)}

const ProductProvider: React.FC<ProductProviderProps> = ({children}) => {
    const baseUrl:string = 'https://win22-webapi.azurewebsites.net/api/products'
    const empty_product_values: ProductItem = { articleNumber: '', name: '', category: '', price: 0, imageName: ''}

    const [product, setProduct] = useState<ProductItem>(empty_product_values)
    const [products, setProducts] = useState<ProductItem[]>([])
    const [featuredProducts, setFeaturedProducts] = useState<ProductItem[]>([])
    const [flashsaleProducts, setFlashsaleProducts] = useState<ProductItem[]>([])
    
    const getProduct = async (articleNumber?: string) => {
        if (articleNumber !== undefined) {
            const res = await fetch (baseUrl + `/${articleNumber}`)
            setProduct(await res.json())
        }   
    }

    const getProducts = async (take: number = 0) => {
        let url = baseUrl

        if (take !== 0)
            url = baseUrl + `?take=${take}`

        const res = await fetch(url)
        setProducts(await res.json())
    }

    const getFeaturedProducts = async (take: number = 0) => {
        let url = baseUrl + `?tag=featured`

        if (take !== 0)
            url += `&take=${take}`

        const res = await fetch(url)
        setFeaturedProducts(await res.json())
    }


    const getFlashsaleProducts = async (take: number = 0) => {
        let url = baseUrl + `?tag=flashsale`

        if (take !== 0)
            url += `&take=${take}`

        const res = await fetch(url)
        setFlashsaleProducts(await res.json())
    }





    return <ProductContext.Provider value={{product, products, featuredProducts, flashsaleProducts, getProduct, getProducts, getFeaturedProducts, getFlashsaleProducts}}>
        {children}
    </ProductContext.Provider>
}

export default ProductProvider

