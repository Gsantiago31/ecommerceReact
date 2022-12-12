import { AddOutlined } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startNewProduct } from '../../store/dashboard';
import { ProductList } from '../components';
import { DashboardLayout } from '../layout'
import { NothingSelectedView, ProductView } from '../views';

export const InventoryPage = () => {

  const dispatch = useDispatch();
  const { isSaving, active } = useSelector( state => state.dashboard );

  const onCLickNewProduct = () => {
    dispatch( startNewProduct() )
  }

  return (
    <>
    <DashboardLayout>

      {
        (!!active)
        ? <ProductView />
        : <NothingSelectedView />
      }

<IconButton
      disabled={ isSaving }
      onClick={ onCLickNewProduct }
      size='large'
      sx={{
        color: 'white',
        backgroundColor: 'secondary.main',
        ':hover': { backgroundColor: 'secondary.main', opacity: 0.9},
        position: 'fixed',
        right: 50,
        bottom: 50,
      }}>
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </DashboardLayout>
    </>
  )
}
