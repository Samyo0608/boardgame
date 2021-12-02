import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMinus,
  faPlus,
  faTrashAlt,
} from "@fortawesome//free-solid-svg-icons";
import "../../css/cart.css";
import Swal from "sweetalert2";

function Cart1(props) {
  const { list } = props;
  const [count, setCount] = useState(1);
  const oneProductPrice = list.product_price * count;

  // 利用原本的localStorege資料存入state狀態
  const [cartLocal, setCartLocal] = useState(
    JSON.parse(localStorage.getItem(list.product_name))
  );

  // 只要count做更動便會將傳入的值帶回去
  useEffect(
    (e) => {
      let newStorage = { ...cartLocal };
      newStorage.product_name = list.product_name;
      newStorage.count = count;
      newStorage.product_id = list.product_id;
      newStorage.product_img = list.product_img;
      newStorage.product_type = list.product_type;
      newStorage.product_price = list.product_price;
      // 此時cartLocal已經做變動了，再將這個值產生localStorage覆蓋原本的值
      localStorage.setItem(list.product_name, JSON.stringify(newStorage));
      // console.log(name);
    },
    [count]
  );

  //sweetAlert2 Toast
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    onOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  const handleMinus = () => {
    setCount(count - 1);
    props.setCheck(!props.check);
    console.log(JSON.parse(localStorage.getItem(list.product_name)));
  };

  const handlePlus = () => {
    setCount(count + 1);
    props.setCheck(!props.check);
    console.log(JSON.parse(localStorage.getItem(list.product_name)));
  };

  const handleDelete = () => {
    props.setCheck(!props.check);
    localStorage.removeItem(list.product_name);
    Toast.fire({
      icon: "success",
      title: "已將商品移除購物車",
    });
  };

  return (
    <>
      <div className="mb-3">
        <div className="box123 row align-items-center">
          <div className="col-3">
            <img
              className="cartpic"
              src={`/product_img/550x400/${list.product_img}`}
              alt=""
            />
          </div>

          <div className="col-3">
            <span className="h3 mt-2 bold">{list.product_name}</span>
          </div>

          <div className="col-3">
            <div className="d-flex justify-content-around align-items-center me-5">
              <button
                className="countButton me-2"
                id="minus"
                value="1"
                onClick={(e) => {
                  if (count > 1) {
                    handleMinus();
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
                  handlePlus();
                }}
              >
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>
            <p className="cartprice mt-4">價格: ${oneProductPrice}</p>
          </div>
          <div className="d-flex justify-content-around align-items-center me-5 col-2">
            <div className="vLine"></div>
            <Button variant="danger" onClick={handleDelete}>
              <FontAwesomeIcon icon={faTrashAlt} />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart1;
