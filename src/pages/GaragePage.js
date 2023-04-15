import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
// @mui
import { Container } from '@mui/material';
// components
import { GarageList } from '../sections/@dashboard/garage';
// mock
import PRODUCTS from '../_mock/garage';

// ----------------------------------------------------------------------

export default function GaragePage() {
  const [openFilter, setOpenFilter] = useState(false);

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  return (
    <>
      <Helmet>
        <title> Dashboard: Garage </title>
      </Helmet>

      <Container>

        <GarageList products={PRODUCTS} />
      </Container>
    </>
  );
}
