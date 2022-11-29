import React from 'react'
import { ProductItem } from '../models/ProductModels'

interface ProductDetailsProps {
  item: ProductItem
}

const ProductDetails: React.FC<ProductDetailsProps> = ({item}) => {  
  return (
    <section className="product-details">
        <div className="container">
            <div>
                <div>{item.name}</div>
                <img src={item.imageName} />
            </div>
        </div>
    </section>
  )
}

export default ProductDetails