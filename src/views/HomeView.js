import React, {useContext, useEffect} from 'react'
import FooterSection from '../sections/FooterSection'
import NavigationBarSection from '../sections/NavigationBarSection'
import ProductGridSection from '../sections/ProductGridSection'
import HeroSection from '../sections/HeroSection'
import BannerSection from '../sections/BannerSection'
import FlashSaleLeftSection from '../sections/FlashSaleLeftSection'
import FlashSaleRightSection from '../sections/FlashSaleRightSection'
import AboutUsSection from '../sections/AboutUsSection'
import { useProductContext } from '../contexts/ProductContext'


const HomeView = () => {
  const {featuredProducts, getFeaturedProducts} = useProductContext()
  const {flashsaleProducts, getFlashsaleProducts} = useProductContext()
  window.top.document.title = 'Fixxo.'

  useEffect(() => {
    getFeaturedProducts(8)
    getFlashsaleProducts(4)
  }, [])


  return (
    <>
      <NavigationBarSection />
      <HeroSection />
      <ProductGridSection title="Featured Products" items={featuredProducts}/>
      <BannerSection />
      <FlashSaleLeftSection items={flashsaleProducts}/>
      <FlashSaleRightSection items={flashsaleProducts}/>
      <AboutUsSection />
      <FooterSection />
    </>
  )
}

export default HomeView