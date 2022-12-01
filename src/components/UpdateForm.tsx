import React, { useEffect } from 'react'
import { ManageProductsContext, IManageProductsContext } from '../contexts/ManageProductsContext'

const UpdateForm = () => {
    
    
    const { product, setProduct, get, update } = React.useContext(ManageProductsContext) as IManageProductsContext

  


  return (
    <form onSubmit={update} className="d-grid mb-5">
    <h3 className="display-6 mb-4">Update Product</h3>
    <input type="hidden" value={product.id} />"
    <input value={product.articleNumber} onChange={(e) => setProduct({...product, articleNumber: e.target.value })} type="text" className="form-control py-2 mb-3" placeholder="articleNumber:" />  
    <input value={product.name} onChange={(e) => setProduct({...product, name: e.target.value })} type="text" className="form-control py-2 mb-3" placeholder="name:" />  
    <input value={product.description} onChange={(e) => setProduct({...product, description: e.target.value })} type="text" className="form-control py-2 mb-3" placeholder="description:" />  
    <input value={product.category} onChange={(e) => setProduct({...product, category: e.target.value })} type="text" className="form-control py-2 mb-3" placeholder="category:" />  
    <input value={product.price} onChange={(e) => setProduct({...product, price: ((e.target.value as unknown) as number) })} type="text" className="form-control py-2 mb-3" placeholder="price:" />  
    <input value={product.rating} onChange={(e) => setProduct({...product, rating: ((e.target.value as unknown) as number) })} type="text" className="form-control py-2 mb-3" placeholder="rating:" />  
    <input value={product.imageName} onChange={(e) => setProduct({...product, imageName: e.target.value })} type="text" className="form-control py-2 mb-3" placeholder="imageName:" />  
    <button type="submit" className="btn btn-success py-2 mt-3">UPDATE PRODUCT</button>
</form>
  )
}

export default UpdateForm