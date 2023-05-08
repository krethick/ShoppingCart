import React from "react";
import { useSelector } from "react-redux";

const ProductComponent: React.FC = () => {
      const products = useSelector((state:any)=> state.productState.products);
     // const {id, title} = products[0];
  return (

    <div style={{ marginTop: "160px" }}>
      <div className="ui link cards" style={{ width: "500px", height: "300px" }}>
       <div className="card">
         <div className="image"></div>
         <div className="content">
            {/*<div className="header">{title}</div>*/}
          </div>
         </div>
        </div>
    </div>
  );
};

export default ProductComponent;
