import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useProductContext } from '../contexts/ProductContext'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import FooterSection from '../sections/FooterSection'
import NavigationBarSection from '../sections/NavigationBarSection'
import ProductDetails from '../sections/ProductDetails'

const ProductDetailsView = () => {
  const {id} = useParams()   
  const {product, getProduct} = useProductContext

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
        <ProductDetails product={product} />
        <FooterSection />
    </>
  )
}

export default ProductDetailsView