import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../css/cart.css";
import Cart1 from "../../components/cart/Cart1";
import axios from "axios";
import { API_URL } from "../../configs/config";
function Cart(props) {
  const [product, setProduct] = useState([
    {
      product_id: 0,
      product_img: "",
      product_name: "",
      product_price: 0,
      product_type: "",
    },
  ]);

  //將localStorage推入陣列
  const cartSave = [];
  const localArray = () => {
    for (let i = 0; i < product.length; i++)
      if (localStorage.getItem(product[i].product_name)) {
        cartSave.push(
          JSON.parse(localStorage.getItem(product[i].product_name))
        );
      }
    return cartSave;
  };

  // 抓取localStorage
  const localArr = (pro) => {
    let newStorage = [];
    // localStorage.getItem(key)
    for (let i = 0; i < pro.length; i++) {
      if (localStorage.getItem(pro[i].product_name)) {
        newStorage.push(JSON.parse(localStorage.getItem(pro[i].product_name)));
      }
    }
    return newStorage;
  };

  // 呼叫function localArr 用productData帶入找localStorage的值
  const localList = localArr(product);
  // ------------------------------------

  return (
    <>
      <div className="d-flex justify-content-around flex-wrap align-items-center mt-3">
        {product.map((v, i) => {
          return (
            <button
              key={i}
              className="btn btn-info me-2 mb-1"
              onClick={() => {
                localStorage.setItem(v.product_name, JSON.stringify(v));
                let newLocal = [...localList];
                newLocal.push(JSON.parse(localStorage.getItem(v.product_name)));
                setProduct(newLocal);
              }}
            >
              {v.product_name}
            </button>
          );
        })}
      </div>
    </>
  );
}

export default Cart;
