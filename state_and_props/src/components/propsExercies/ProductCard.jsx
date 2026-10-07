import React, { useState } from 'react'
import PropsManagement from './PropsManagement';

const ProductCard = () => {

   const productData = {
    productName: "Asus VivoBook 16",
    price: 55000,
    rating: 4.8,
    isAvailable: true,
    features: ["Fingerprint Lock", "RGB Backlit", "180 degree flexible", "Long battery life"]
  };

  return (
    <>
      <h1>Store Products</h1>
      <PropsManagement
        productName={productData.productName}
        price={productData.price}
        rating={productData.rating}
        isAvailable={productData.isAvailable}
        features={productData.features}
      />
    </>
  );
}

export default ProductCard
