import React from 'react'
import CustomerSupport from '../assets/images/customer-support-icon.png'
import SecuredPayment from '../assets/images/secured-payment-icon.png'
import FreeDelivery from '../assets/images/free-delivery-icon.png'
import ThirtyDayReturn from '../assets/images/thirty-day-return-icon.png'



const AboutUsSection = () => {
  return (
    <section className="about-us">
        <div className="container">
            <div className="icons"> 
                <div>
                    <img src={CustomerSupport} alt="" /> 
                    <h5>Customer Support</h5>
                    <p>We guarantee to answer</p>
                    <p>you within 24 hours</p>
                </div>
                <div>
                    <img src={SecuredPayment} alt="" /> 
                    <h5>Secured Payment</h5>
                    <p>We guarantee to answer</p>
                    <p>you within 24 hours</p>
                </div>
                <div>
                    <img src={FreeDelivery} alt="" /> 
                    <h5>Free Home Delivery</h5>
                    <p>We guarantee to answer</p>
                    <p>you within 24 hours</p>
                </div>
                <div>
                    <img src={ThirtyDayReturn} alt="" /> 
                    <h5>30 Day Return</h5>
                    <p>We guarantee to answer</p>
                    <p>you within 24 hours</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutUsSection