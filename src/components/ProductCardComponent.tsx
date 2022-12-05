import React from 'react'
import { NavLink } from 'react-router-dom'
import { currencyFormatter } from '../utilities/currencyFormatter'
import { useShoppingCartContext, ShoppingCartContextProps } from '../contexts/ShoppingCartContext'
import { ProductItem } from '../models/ProductModels'

interface ProductCardComponentProps {
    product: ProductItem
}

const ProductCardComponent: React.FC<ProductCardComponentProps> = ({product}) => { //Hans har item
    const { incrementQuantity } = useShoppingCartContext() as ShoppingCartContextProps

  return (
    <div className="col">
        <div className="card">
            <div className= "card-img">
                <img src={product.imageName} alt={product.name} />
                <div className="card-menu d-xl-none">
                    <button className="btn btn-light btn-sm"><i className="fa-light fa-heart"></i></button>
                    <button className="btn btn-light btn-sm"><i className="fa-light fa-code-compare"></i></button>
                    <button onClick={() => incrementQuantity({articleNumber: product.articleNumber, product: product, quantity: 1})} className="btn btn-light btn-sm"><i className="fa-light fa-bag-shopping"></i></button>
                </div>
                <NavLink to={`/products/${product.articleNumber}`} className="btn-theme btn-card-theme d-xl-none">  
                {/* innan stod det: <NavLink to={`/products/${product.name.toLowerCase().replace(/ /gi, "-")}`} className="btn-theme btn-card-theme d-xl-none"> */}
                    <span className="btn-theme-left-border"></span>
                    QUICK VIEW
                    <span className="btn-theme-right-border"></span>
                </NavLink>
            </div>
            <div className="card-body">
                <p className ="card-category">{product.category}</p>
                <h5 className="card-title">{product.name}</h5>
                <p className="card-rating">
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                </p>
                <p className="card-price">{currencyFormatter(product.price)}</p>
            </div>         
        </div>
    </div>
  )
}

export default ProductCardComponent