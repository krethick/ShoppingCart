import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from './redux/actions/productsActions';
import  ProductComponent from "./ProductComponent";

const ProductListing: React.FC = () => {
  const products = useSelector((state)=> state);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      if (response && response.data) {
        dispatch(setProducts(response.data));
      }
    } catch (err) {
      console.log("Err", err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log("Products: ", products);

  return (
    <div className="ui grid container">
      <ProductComponent />
      <h1 style={{ margin: "40px", textAlign: "right" }}>Product Listing</h1>
    </div>
  );
};

export default ProductListing;
