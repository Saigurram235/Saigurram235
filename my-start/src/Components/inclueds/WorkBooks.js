import React from 'react';
import ProductSlider from "../inclueds/productslider";

function Page1() {
  const productsPage1 = [
    { id: 1, name: 'Apple', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Banana', image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Cherry', image: 'https://via.placeholder.com/150' },

    { id: 1, name: 'Apple', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Banana', image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Cherry', image: 'https://via.placeholder.com/150' },
  ];

  return <ProductSlider products={productsPage1} />;
}

export default Page1;
