import PropTypes from 'prop-types';
// @mui
import { Grid } from '@mui/material';
import GarageCard from './GarageCard';

// ----------------------------------------------------------------------

GarageList.propTypes = {
  products: PropTypes.array.isRequired,
};

export default function GarageList({ products, ...other }) {
  return (
    <Grid container spacing={3} {...other}>
      {products.map((product) => (
        <Grid key={product.id} item xs={12} sm={6} md={3}>
          <GarageCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
}
