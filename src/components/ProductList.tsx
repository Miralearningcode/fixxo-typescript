import React, { useEffect } from 'react'
import { IManageProductsContext, ManageProductsContext} from '../contexts/ManageProductsContext'
import { Product } from '../models/ProductModel'

const ProductList = () => {
    const { products, getAll, remove } = React.useContext(ManageProductsContext) as IManageProductsContext

    useEffect(() => {
        getAll()
        
    }, [getAll])

    const removeProduct = (id:number) => {
      remove(id)
    }


  return (
    <>
    <h3 className="display-6 mb-4">List of Products</h3>
    {
        products.map((product: Product) => (<div onClick={() => removeProduct(product.id)} key={product.id} className="mb-3">{product.id} {product.name} </div>))
    }
    </>
  )
}

export default ProductList


//    onClick={() => remove(product.articleNumber)}