import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { DashboardRoutes } from '../dashboard'
import { useCheckAuth } from '../hooks/useCheckAuth'
import { StorefrontRoutes } from '../storefront'
import { CheckingAuth } from '../ui/components/CheckingAuth'

export const AppRouter = () => {
  const status = useCheckAuth();

  if (status === "checking") {
    return <CheckingAuth />
  }


  return (
    <Routes>

      {status === "authenticated" ? (
        <Route path='/*' element={<DashboardRoutes />} />
      ) : (
        <Route path='/*' element={<StorefrontRoutes />} />
      )}

<Route path="/*" element={<Navigate to="/home" />} />

    </Routes>
  )
}
