import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../css/cart.css";
import Cart1 from "../../components/cart/Cart1";
import axios from "axios";
import { API_URL } from "../../configs/config";
import Swal from "sweetalert2";
function Cart(props) {
  const [check, setCheck] = useState(false);
  const [product, setProduct] = useState([
    {
      product_id: 0,
      product_img: "",
      product_name: "",
      product_price: 0,
      product_type: "",
    },
  ]);
  const [sessionMember, setSessionMember] = useState({
    id: "",
    email: "",
    account: "",
    point: "",
  });

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
  const [local, setLocal] = useState(localArray());
  useEffect(() => {
    setLocal(cartSave);
  }, [product, check]);
  //----------------------------------
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

  const totalMoney = (lcl) => {
    let total = 0;
    for (let i = 0; i < lcl.length; i++) {
      total = total + lcl[i].count * lcl[i].product_price;
    }
    return total;
  };

  let localtotal = totalMoney(localList);

  // 載入資料庫
  useEffect((e) => {
    async function product() {
      let productItem = await axios.get(`${API_URL}/cart/`, {
        withCredentials: true,
      });
      setProduct(productItem.data);
    }
    product();
  }, []);

  // session載入
  useEffect((e) => {
    async function session() {
      try {
        let memberSession = await axios.get(`${API_URL}/session/member`, {
          withCredentials: true,
        });
        setSessionMember(memberSession.data);
      } catch (e) {
        // alert("獲取資料失敗");
      }
    }
    session();
  }, []);

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

  //刪除購物車按鈕
  const deleteClicks = () => {
    Toast.fire({
      icon: "success",
      title: "已清空購物車",
    });
    localStorage.clear();
    setLocal([]);
  };

  return (
    <>
      {/* 頂端 */}
      <div className="cartWidth">
        <div>
          <h2 className="text-center mt-3 bold">購物車</h2>
          <div className="titleLineBox">
            <img alt="" className="titleLine" src="img/index/line.png" />
          </div>
        </div>
        <div className="d-flex justify-content-start">
          <Button className="" variant="outline-danger" onClick={deleteClicks}>
            清除購物車
          </Button>
        </div>
        <div className="mt-3 payman11 text-center">
          <span>購 物 清 單</span>
        </div>
        {/* 頂端 end*/}

        {/* container cart1 component*/}
        <div className="CartListBG d-flex flex-column justify-content-between align-items-center">
          <div className="d-flex flex-column justify-content-start align-items-center mt-4">
            {local.length !== 0 ? (
              <>
                {localList.map((v, i) => {
                  return (
                    <Cart1
                      key={v.product_id}
                      list={localList[i]}
                      check={check}
                      setCheck={setCheck}
                    />
                  );
                })}
              </>
            ) : (
              <div className="box123 d-flex flex-column justify-content-center align-items-center">
                <p className="bold h3">購物車目前沒有東西呦</p>
                <Link to="/Product">
                  <button className="btn btn-primary bold">前往商品頁面</button>
                </Link>
              </div>
            )}
          </div>

          <div className="total d-flex justify-content-end align-items-center mb-3 py-3">
            <span className="bold me-1 ms-5">共計　</span>
            <span className="text-danger bold">{localtotal}　</span>
            <span className="bold me-3">元</span>
          </div>
        </div>

        {/* footer */}
        <div className="d-flex justify-content-between mt-3 mb-3 align-items-center">
          <Link to="/">
            <Button className="buttoncheck" variant="secondary">
              回首頁
            </Button>
          </Link>
          <div className="">
            {local.length !== 0 ? (
              <Link to={`/Cartcheck${sessionMember.account}`}>
                <Button className="buttoncheck" variant="success">
                  確認訂單
                </Button>
              </Link>
            ) : (
              <></>
            )}
            <Link to="/Product">
              <button className="btn btn-light comebuy ms-3">繼續購物</button>
            </Link>
          </div>
        </div>
        {/* footer end*/}
      </div>
    </>
  );
}

export default Cart;
