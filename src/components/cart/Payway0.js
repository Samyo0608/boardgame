import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "../../css/cart.css";

function Cart1(props) {
  const { name, price, count, imgURL } = props;

  return (
    <>
      <div className="mt-1 mb-1">
        <div className="checkCartBox d-flex justify-content-around align-items-center">
          <div className="ms-3">
            <img
              className="cartpic"
              src={`/product_img/550x400/${imgURL}`}
              alt=""
            />
          </div>

          <div className="">
            <span className="h3 mt-2 bold">{name}</span>
          </div>

          <div>
            <div className="d-flex justify-content-around align-items-center me-5">
              <p className="bold h4 count me-2" id="count">
                數量 : {count}
              </p>
            </div>
            <p className="cartprice mt-4 bold">${price}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart1;
