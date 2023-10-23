import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startNewProduct } from '../../store/dashboard';
import { MenuMobile } from '../components';
import { DashboardLayout } from '../layout';

export const DashboardPage = () => {

  return (
    <>
    <DashboardLayout>
      <MenuMobile />
    </DashboardLayout>
    </>
  )
}
