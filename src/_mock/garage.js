import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

const products = [...Array(4)].map((_, index) => {
  const setIndex = index + 1;

  return {
    id: faker.datatype.uuid(),
    cover: `/assets/images/products/product_${setIndex}.jpg`
  };
});

export default products;
