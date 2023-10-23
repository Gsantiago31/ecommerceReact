import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { AuthRoutes } from '../../auth/routes/AuthRoutes'
import { CartPage, CheckoutPage, ContactPage, HomePage, ProductsPage, WishList } from '../pages'
import { useSelector } from 'react-redux'

export const StorefrontRoutes = () => {
  const { status } = useSelector((state) => state.auth);
  return (
    <Routes>
      <Route path='/home' element={<HomePage />}/>
      {/* <Route path='/about' element={<AboutPage />}/> */}
      <Route path='/products' element={<ProductsPage />}/>
      <Route path='/cart' element={<CartPage />}/>
      <Route path='/contact' element={<ContactPage />}/>
      <Route path='/wish-list' element={<WishList />} />
      <Route path='/checkout' element={<CheckoutPage />} />

      {status === 'not-authenticated' &&
        <Route path="/auth/*" element={<AuthRoutes />} />
      }

      <Route path='/*' element={<Navigate to='/home' />} />
    </Routes>
  )
}
