import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { AuthRoutes } from '../../auth/routes/AuthRoutes'
import { AboutPage, CartPage, ContactPage, HomePage, ProductsPage, WishList } from '../pages'

export const StorefrontRoutes = () => {
  return (
    <Routes>
      <Route path='/home' element={<HomePage />}/>
      <Route path='/about' element={<AboutPage />}/>
      <Route path='/products' element={<ProductsPage />}/>
      <Route path='/cart' element={<CartPage />}/>
      <Route path='/contact' element={<ContactPage />}/>
      <Route path='/wish-list' element={<WishList />} />

      <Route path='/*' element={<Navigate to='/home' />} />

      <Route path="/auth/*" element={<AuthRoutes />} />
    </Routes>
  )
}
