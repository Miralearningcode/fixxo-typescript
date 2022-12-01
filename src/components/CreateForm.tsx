import React from 'react'
import { ManageProductsContext, IManageProductsContext } from '../contexts/ManageProductsContext'

const CreateForm = () => {
    const { productRequest, setProductRequest, create } = React.useContext(ManageProductsContext) as IManageProductsContext
  


  return (
    <form onSubmit={create} className="d-grid mb-5">
    <h3 className="display-6 mb-4">Create Product</h3>
    <input value={productRequest.articleNumber} onChange={(e) => setProductRequest({...productRequest, articleNumber: e.target.value })} type="text" className="form-control py-2 mb-3" placeholder="articleNumber:" />  
    <input value={productRequest.name} onChange={(e) => setProductRequest({...productRequest, name: e.target.value })} type="text" className="form-control py-2 mb-3" placeholder="name:" />  
    <input value={productRequest.description} onChange={(e) => setProductRequest({...productRequest, description: e.target.value })} type="text" className="form-control py-2 mb-3" placeholder="description:" />  
    <input value={productRequest.category} onChange={(e) => setProductRequest({...productRequest, category: e.target.value })} type="text" className="form-control py-2 mb-3" placeholder="category:" />  
    <input value={productRequest.price} onChange={(e) => setProductRequest({...productRequest, price: ((e.target.value as unknown) as number) })} type="text" className="form-control py-2 mb-3" placeholder="price:" />  
    <input value={productRequest.rating} onChange={(e) => setProductRequest({...productRequest, rating: ((e.target.value as unknown) as number) })} type="text" className="form-control py-2 mb-3" placeholder="rating:" />  
    <input value={productRequest.imageName} onChange={(e) => setProductRequest({...productRequest, imageName: e.target.value })} type="text" className="form-control py-2 mb-3" placeholder="imageName:" />  
    <button type="submit" className="btn btn-success py-2 mt-3">CREATE PRODUCT</button>
</form>
  )
}

export default CreateForm