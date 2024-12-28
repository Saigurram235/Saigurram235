import React from 'react';
import ProductSlider from "../inclueds/productslider";
// import final_image_with_gkbookstore from '../images/final_image_with_gkbookstore.png';

function Page1() {
  const productsPage1 = [
    // { id: 1, name: 'Product 1', image: final_image_with_gkbookstore },
    { id: 2, name: 'Product 2', image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Product 3', image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Product 4', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Banana', image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Cherry', image: 'https://via.placeholder.com/150' },

    { id: 1, name: 'Apple', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Banana', image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Cherry', image: 'https://via.placeholder.com/150' },
  ];

  return <ProductSlider products={productsPage1} />;
}

export default Page1;
