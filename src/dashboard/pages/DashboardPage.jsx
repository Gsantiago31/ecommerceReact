import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startNewProduct } from '../../store/dashboard';
import { MenuMobile } from '../components';
import { DashboardLayout } from '../layout';

export const DashboardPage = () => {

  const dispatch = useDispatch();
  const { isSaving, active } = useSelector( state => state.dashboard );

  const onCLickNewProduct = () => {
    dispatch( startNewProduct() )
  }

  return (
    <>
    <DashboardLayout>
      <MenuMobile />
    </DashboardLayout>
    </>
  )
}
