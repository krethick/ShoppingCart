import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  category: string;
}

const ProductComponent: React.FC = () => {
  const products = useSelector((state: any) => state.productState.products);
  //We need to use map functions
  const renderList = products.map((product: Product) => {
    const { id, title, image, price, category } = product;
    return (
      <div style={{ marginTop: "160px" }} key={id}>
          <Link to={`/product/${id}`}>
        <div className="ui link cards" style={{ width: "200px", height: "500px" }}>
          <div className="card">
            <div className="image">
              <img src={image} alt={title} />
            </div>
            <div className="content">
              <div className="header">{title}</div>
              <div className="meta price">$ {price}</div>
              <div className="meta">{category}</div>
            </div>
          </div>
        </div>
        </Link>
      </div>
    );
  });

  return <>{renderList}</>;
};

export default ProductComponent;
