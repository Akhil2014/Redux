import React from 'react'
import {Route , Routes} from 'react-router-dom'
import Cart from '../Pages/Cart'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Product from '../Pages/Product'
import SingleProduct from '../Pages/SingleProduct'
import PrivateRoute from './PrivateRoute'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/product" element={<Product />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/product/:id" element={<PrivateRoute><SingleProduct /></PrivateRoute>}/>
        <Route path="*" element={<h1>Page Not Found</h1>}/>
    </Routes>
  )
}

export default AllRoutes