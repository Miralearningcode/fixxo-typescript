import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import IconComponent from '../components/IconComponent'
import { useShoppingCart } from '../contexts/ShoppingCartContext'

const NavigationBarSection = () => {
    const [showMenu, setShowMenu] = useState(false) 
    const { cartQuantity } = useShoppingCart()  

    const toggleMenu = () => {
        setShowMenu(!showMenu) //! = motsatsen till värdet
    }


  return (
    <nav className="navigation-bar">
        <div className="container">
            <NavLink className="logotype" to="/" end>Fixxo.</NavLink>
                <div className={ `navigation-links ${ showMenu ? "d-grid" : ""}` }>
                    <NavLink className="navigation-link" to="/" end>Home</NavLink>
                    <NavLink className="navigation-link" to="/categories" end>Categories</NavLink>
                    <NavLink className="navigation-link" to="/products">Products</NavLink>
                    <NavLink className="navigation-link" to="/contacts" end>Contacts</NavLink>
                </div>
            <div className="icons">
                <IconComponent link="/search" icon="fa-light fa-magnifying-glass" />
                <IconComponent hideOnMobile={true} link="/compare" icon="fa-light fa-code-compare" />
                <IconComponent hideOnMobile={true} link="/wishlist" icon="fa-light fa-heart" />

                <button className={ `icon btn btn-light btn-sm "d-none d-md-flex" : "" }` }  type="button" data-bs-toggle="offcanvas" data-bs-target="#shoppingCart" aria-controls="shoppingCart">
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-theme">{cartQuantity}</span>
                    <i className="fa-light fa-bag-shopping"></i>
                </button>

                <button onClick={toggleMenu} className="d-xl-none icon-component btn-light"><i className="fa-regular fa-bars"></i></button>

            </div>
        </div>
    </nav>
  )
}

export default NavigationBarSection