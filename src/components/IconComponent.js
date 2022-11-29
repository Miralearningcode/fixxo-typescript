import React from 'react'
import { NavLink } from 'react-router-dom'

const IconComponent = ({link, icon, quantity, hideOnMobile}) => {

  return (
    <NavLink className={ `icon btn btn-light btn-sm ${hideOnMobile ? "d-none d-md-flex" : "" }` } to={link} end>
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-theme">{quantity}</span>
      <i className={icon}></i>
    </NavLink>
  )
}

export default IconComponent