import React, { useEffect } from 'react'
import { IManageProductsContext, ManageProductsContext} from '../contexts/ManageProductsContext'
import { Product } from '../models/ProductModel'

const ProductList = () => {
    const { products, getAll } = React.useContext(ManageProductsContext) as IManageProductsContext

    useEffect(() => {
        getAll()
        
    }, [getAll])


  return (
    <>
    <h3 className="display-6 mb-4">List of Products</h3>
    {
        products.map((product: Product) => (<div key={product.articleNumber} className="mb-3">{product.articleNumber} {product.name} </div>))
    }
    </>
  )
}

export default ProductList


//    onClick={() => remove(product.articleNumber)}