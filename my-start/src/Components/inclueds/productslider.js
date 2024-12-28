import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "../project.css";

function ProductSlider({ products = [] }) {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1600 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1600, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
    },
    mobile: {
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
}

export default ProductSlider;
