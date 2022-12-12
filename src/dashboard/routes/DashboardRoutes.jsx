import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import { AnalyticsPage, InventoryPage, ProfilePage } from '../pages';
import { DashboardPage } from '../pages/DashboardPage';

export const DashboardRoutes = () => {
  return (
    <Routes>
        <Route path='/dashboard' element={<DashboardPage />} />
        <Route path='/inventory' element={<InventoryPage />} />
        <Route path='/analytics' element={<AnalyticsPage />} />
        <Route path='/profile' element={<ProfilePage />} />

        <Route path='/*' element={<Navigate to="/dashboard" />} />

    </Routes>
  )
}
