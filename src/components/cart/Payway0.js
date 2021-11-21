import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "../../css/cart.css";

function Cart1(props) {
  const { product_name, product_price } = props;

  return (
    <>
      <div className="mt-5 mb-4">
        <div className="checkCartBox d-flex justify-content-between align-items-center">
          <div className="ms-3">
            <img className="cartpic" src="/img/product/game1.jpg" alt="" />
          </div>

          <div className="">
            <span className="h3 mt-2 bold">{product_name}</span>
          </div>

          <div>
            <div className="d-flex justify-content-around align-items-center me-5">
              <p className="bold h4 count me-2" id="count">
                數量 : 1
              </p>
            </div>
            <p className="cartprice mt-4">Price: ${product_price}</p>
          </div>
          <div className="d-flex justify-content-around align-items-center me-5"></div>
        </div>
      </div>
    </>
  );
}

export default Cart1;
