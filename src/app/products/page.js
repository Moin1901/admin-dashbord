import React from "react";
import ProductLayout from "../components/products/product-layout";
import ProductListing from "../components/products/product-listing";

const products = () => {
  return (
    <ProductLayout>
      <ProductListing />
    </ProductLayout>
  );
};

export default products;
