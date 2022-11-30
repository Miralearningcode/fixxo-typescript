import React from 'react'
import CreateForm from '../components/CreateForm'
import ProductList from '../components/ProductList'
import ManageProductsProvider from '../contexts/ManageProductsContext'


// import CreateForm from '../components/CreateForm'
// import UserList from '../components/UserList'

const ManageProductsView = () => {
  return (
    <ManageProductsProvider> 
      <div className="container mt-5"> 
        <CreateForm />
        <hr className="my-5" />
        <ProductList />
      </div>
    </ManageProductsProvider> 
  )
}

export default ManageProductsView    