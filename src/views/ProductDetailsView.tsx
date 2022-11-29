import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useProductContext } from '../contexts/ProductContext'
import { ProductContextProps } from '../models/ProductContextModel'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import FooterSection from '../sections/FooterSection'
import NavigationBarSection from '../sections/NavigationBarSection'
import ProductDetails from '../sections/ProductDetails'

const ProductDetailsView: React.FC = () => {
  const {id} = useParams<string>()   
  const {product, getProduct} = useProductContext() as ProductContextProps

  useEffect (() => {
    getProduct(id)
  }, [])

  return (
    <>
        <NavigationBarSection />
        <BreadcrumbSection parentPage="Products" currentPage={product.name} />
        <div className="container mt-5"> 
            <h1>{product.name}</h1>
        </div>
        <ProductDetails item={product} />
        <FooterSection />
    </>
  )
}

export default ProductDetailsView