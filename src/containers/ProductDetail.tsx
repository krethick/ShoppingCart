import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectedProducts } from "./redux/actions/productsActions";

const ProductDetail: React.FC = () => {
  const product = useSelector((state:any) => state.product);
  const { productId } = useParams();
  const dispatch = useDispatch();
  console.log(product);

  const fetchProductDetail = async () => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
      if (response) {
        dispatch(selectedProducts(response.data));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail();
  }, [productId]);

  return (
    <div>
      <h1>ProductDetail</h1>
    </div>
  );
};

export default ProductDetail;
