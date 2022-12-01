import React, { useState, useContext, createContext, Children } from 'react'
import { Product, ProductRequest } from '../models/ProductModel'
import { ManageProductsProviderProps } from '../models/ManageProductsProviderPropsModel'

export interface IManageProductsContext { //IuserContext
    product: Product  //user: User
    setProduct: React.Dispatch<React.SetStateAction<Product>> //setUser: React.Dispatch<React.SetStateAction<Product>> 
    productRequest: ProductRequest //userRequest: UserRequest
    setProductRequest: React.Dispatch<React.SetStateAction<ProductRequest>> // setUserRequest: React.Dispatch<React.SetStateAction<UserRequest>> 
    products: Product[]   //users: User[]
    create: (e: React.FormEvent) => void //create: (e: React.FormEvent) => void
    get: (id: number) => void //get: (id: number) => void
    getAll: () => void //getAll: () => void
    update: (e: React.FormEvent) => void //update: (id: number, e: React.FormEvent) => void
    remove: (id: number) => void //delete: (id: number) => void
} 


export const ManageProductsContext= createContext<IManageProductsContext | null>(null)  //UserContext
export const useManageProductsContext = () => { return useContext(ManageProductsContext)}

const ManageProductsProvider = ({children} : ManageProductsProviderProps) => {  //UserProvider  UserProviderProps
    const baseUrl = 'http://localhost:5000/api/products' //'http://localhost:5000/api/users'
    const defaultProductValues: Product = { id: 0, articleNumber: '', name: '', description: '', category: '', price: 0, rating: 0, imageName: '' }
    const defaultProductRequestValues: ProductRequest = { articleNumber: '', name: '', description: '', category: '', price: 0, rating: 0, imageName: '' }


    const [product, setProduct] = useState<Product>(defaultProductValues) //[user, setUser] (user_default)
    const [productRequest, setProductRequest] = useState<ProductRequest>(defaultProductRequestValues) //[userRequest, setUserRequest] (userRequest_default)
    const [products, setProducts] = useState<Product[]>([]) // [users, setUsers]


    const create = async (e: React.FormEvent) => {
        e.preventDefault()

        const result = await fetch(`${baseUrl}`, {
            method: 'post',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(productRequest)
        })

        if (result.status === 201) {  //201 är lika med created //om vi lyckas skapa en produkt....
            setProductRequest(defaultProductRequestValues) //...så rensas formuläret
        } else {
            console.log('error')
        }
              

    }
    const get = async (id: number) => {
        const result = await fetch(`${baseUrl}/${id}`)
        if (result.status === 200)
            setProduct(await result.json())

    }
    const getAll = async () => {
        const result = await fetch(`${baseUrl}`)
        if (result.status === 200)
            setProducts(await result.json())
    }
    const update = async (e: React.FormEvent) => {
        e.preventDefault()

        const result = await fetch(`${baseUrl}/${product.id}`, {
            method: 'put',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })

        if (result.status === 200)
            setProduct(await result.json())
             
    }
    const remove = async (id: number) => {
        const result = await fetch(`${baseUrl}/${id}`, {
            method: 'delete'
        })

        if (result.status === 204)
            setProduct(defaultProductValues)
    }
  
    return (
    <ManageProductsContext.Provider value={{ product, setProduct, productRequest, setProductRequest, products, create, get, getAll, update, remove }}>  
        {children}
    </ManageProductsContext.Provider>
  )
}

export default ManageProductsProvider