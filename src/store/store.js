import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth'
import { dashboardSlice } from './dashboard'
import { storefrontSlice } from './storefront'

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    dashboard: dashboardSlice.reducer,
    storefront: storefrontSlice.reducer,
  },
})