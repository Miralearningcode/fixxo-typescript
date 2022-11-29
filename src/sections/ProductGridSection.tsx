import React from 'react'
import ProductCardComponent from '../components/ProductCardComponent'
import { ProductItem } from '../models/ProductModels'

interface ProductGridSectionProps {
  title: string
  items: ProductItem[]
}

const ProductGridSection: React.FC<ProductGridSectionProps>= ({title, items = []}) => {

  return (
    <section className="product-grid">
        <div className="container">
            <h1>{title}</h1>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-3"> 
                {
                  items.map(product => <ProductCardComponent key={product.articleNumber} product={product} />) //Hans har item={product}
                }  
            </div>  
        </div>
    </section>
  )
}

export default ProductGridSection