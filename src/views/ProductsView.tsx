import React, {useContext, useEffect} from 'react'
import FooterSection from '../sections/FooterSection'
import NavigationBarSection from '../sections/NavigationBarSection'
import ProductGridSection from '../sections/ProductGridSection'
import { useProductContext } from '../contexts/ProductContext'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import { ProductContextProps } from '../models/ProductContextModel'

const ProductsView: React.FC = () => {
  const {products, getProducts} = useProductContext() as ProductContextProps
  // window.top.document.title = 'Products | Fixxo.'
  
  useEffect(() => {
    getProducts()
  }, [])

  return (
    <>
      <NavigationBarSection />
      <BreadcrumbSection currentPage= "Products" />
      <ProductGridSection title="Products" items= {products} />
      <FooterSection />
    </>
  )
}

export default ProductsView