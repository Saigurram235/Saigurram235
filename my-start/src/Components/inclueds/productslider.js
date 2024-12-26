import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "../project.css";

function ProductSlider () {
  const products = [
    { id: 1, name: 'Product 1', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Product 2', image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Product 3', image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Product 4', image: 'https://via.placeholder.com/150' },
    { id: 5, name: 'Product 5', image: 'https://via.placeholder.com/150' },
    { id: 6, name: 'Product 6', image: 'https://via.placeholder.com/150' },
    { id: 7, name: 'Product 7', image: 'https://via.placeholder.com/150' },
  ];

  const responsive = {
    superLargeDesktop: {
      // screens larger than 1600px
      breakpoint: { max: 4000, min: 1600 },
      items: 5,
    },
    desktop: {
      // screens larger than 1024px
      breakpoint: { max: 1600, min: 1024 },
      items: 4,
    },
    tablet: {
      // screens larger than 768px
      breakpoint: { max: 1024, min: 768 },
      items: 3,
    },
    mobile: {
      // screens smaller than 768px
      breakpoint: { max: 768, min: 0 },
      items: 2,
    },
  };

  return (
    <div className="product-slider">
      <Carousel
        responsive={responsive}
        swipeable
        draggable
        showDots={false}
        infinite
        autoPlay={false}
        autoPlaySpeed={3000}
        keyBoardControl
        customTransition="all 0.5s"
        transitionDuration={500}
        containerClass="carousel-container"
        itemClass="carousel-item-padding-40-px"
      >
        {products.map((product) => (
          <div key={product.id} className="product-item text-center">
            <img
              src={product.image}
              alt={product.name}
              style={{ width: '150px', height: '150px', objectFit: 'contain' }}
            />
            <p>{product.name}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ProductSlider;
