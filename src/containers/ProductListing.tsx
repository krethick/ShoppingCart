import React from "react";
import { useSelector } from "react-redux";
import  ProductComponent from "./ProductComponent";

const ProductListing: React.FC = () => {
     const products = useSelector((state)=> state);
     console.log(products);
  return (
    <div className="ui grid container">
       <ProductComponent />
      <h1 style={{ margin: "40px", textAlign: "right" }}>Product Listing</h1>
    </div>
  );
};

export default ProductListing;
