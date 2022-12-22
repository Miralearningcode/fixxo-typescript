import ShoppingCart from "../components/ShoppingCart"
import { createContext, useContext, useState } from "react";
import { CartItem } from "../models/CartModels";


interface ShoppingCartProviderProps {
    children: any
}


export interface ShoppingCartContextProps {
    cartItems: CartItem[]
    cartQuantity: number
    incrementQuantity: (cartItem: CartItem) => void
    decrementQuantity: (cartItem: CartItem) => void
    removeItem: (articleNumber: string) => void
    
}


export const ShoppingCartContext = createContext<ShoppingCartContextProps | null>(null)
export const useShoppingCartContext = () => { return useContext(ShoppingCartContext)}

export const ShoppingCartProvider: React.FC<ShoppingCartProviderProps> = ({children}) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([])
    const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0)

    const incrementQuantity = (cartItem: CartItem) => {
        const {articleNumber, product} = cartItem

        setCartItems(items => {
            if (items.find(item => item.articleNumber === articleNumber) ==null) {
                return [...items, { articleNumber, product, quantity: 1}]
            } else {
                return items.map(item => {
                    if (item.articleNumber === articleNumber) {
                        return {...item, quantity: item.quantity + 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }       

    const decrementQuantity = (cartItem: CartItem) => {
        const {articleNumber} = cartItem

        setCartItems(items => {
            if (items.find(item => item.articleNumber === articleNumber)?.quantity === 1) {
                return items.filter(item => item.articleNumber !== articleNumber)
            } else {
                return items.map(item => {
                    if (item.articleNumber === articleNumber) {
                        return {...item, quantity: item.quantity - 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }  

    const removeItem = (articleNumber: string) => {
        setCartItems(items => {
            return items.filter(item => item.articleNumber !== articleNumber)
        })
    }

    return <ShoppingCartContext.Provider value={{cartItems, cartQuantity, incrementQuantity, decrementQuantity, removeItem }}>
        {children}
        <ShoppingCart />
    </ShoppingCartContext.Provider>
}