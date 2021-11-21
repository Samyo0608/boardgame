import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome//free-solid-svg-icons";
// import "../../css/cart.css";

function Cart1(props) {
  const { product_name, product_price } = props;
  const [count, setCount] = useState(1);
  const oneProductPrice = product_price * count;

  return (
    <>
      {/* 遊戲一 */}
      <div className="box12 mt-5">
        <div className="box123 d-flex justify-content-between align-items-center">
          <div>
            <input className="ms-3" type="checkbox" />
            <img className="cartpic" src="/img/product/game1.jpg" alt="" />
          </div>

          <div className="">
            <span className="h3 mt-2 bold">{product_name}</span>
          </div>

          <div>
            <div className="d-flex justify-content-around align-items-center me-5">
              <button
                className="countButton me-2"
                id="minus"
                value="1"
                onClick={(e) => {
                  if (count > 1) {
                    setCount(count - 1);
                  } else {
                    setCount(1);
                  }
                }}
              >
                <FontAwesomeIcon icon={faMinus} />
              </button>
              <p className="bold h3 count me-2" id="count">
                {count}
              </p>
              <button
                className="countButton"
                id="plus"
                value="1"
                onClick={(e) => {
                  setCount(count + 1);
                }}
              >
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>
            <p className="cartprice mt-4">Price: ${oneProductPrice}</p>
          </div>
          <div className="d-flex justify-content-around align-items-center me-5">
            <div className="vLine"></div>
            <Button variant="danger">移除</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart1;
