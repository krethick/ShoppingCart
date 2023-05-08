import React, { useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import  ProductComponent from "./ProductComponent";

const ProductListing: React.FC = () => {
     const products = useSelector((state)=> state);

     const fetchProducts = async () => {
       const response = await axios
           .get("https://fakestoreapi.com/products")
           .catch((err) => {
              console.log("Err",err);
             });
             console.log(response);
           };
     useEffect(() => {
        fetchProducts();
     }, []);
    console.log(products);
  return (
    <div className="ui grid container">
       <ProductComponent />
      <h1 style={{ margin: "40px", textAlign: "right" }}>Product Listing</h1>
    </div>
  );
};

export default ProductListing;
