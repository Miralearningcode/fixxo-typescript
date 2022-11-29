import React from 'react'
import PamelaReif from '../assets/images/pamela-reif.svg'
import ConsciousBanner from '../assets/images/lets-be-conscious.svg'

const BannerSection = () => {
  return (
    <section className="banner-section">
    <div className="container">
        <div className="row row-cols-1 row-cols-md-2 g-4"> 
          <img src={PamelaReif} alt="Pamela Reif banner" />
          <img src={ConsciousBanner} alt="Let's be conscious banner" />
        </div>
    </div>
</section>
  )
}

export default BannerSection