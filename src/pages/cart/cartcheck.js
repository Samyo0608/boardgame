import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FloatingLabel, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "../../css/cart.css";
import Payway0 from "../../components/cart/Payway0";
import axios from "axios";
import { API_URL } from "../../configs/config";

function Cartcheck(props) {
  // 儲存api-product資料
  const [productData, setProductData] = useState([]);
  // 抓取網址上的account
  const accParams = useParams();
  // 儲存api-member資料
  const [member, setMember] = useState({
    account: "",
    name: "",
    email: "",
    phone: "",
    address: "",
    point: 0,
  });
  // 儲存欲使用的point
  const [point, setPoint] = useState(0);

  // 載入網頁就先抓資料
  useEffect(() => {
    async function productData() {
      let product = await axios.get(`${API_URL}/cart/`, {
        withCredentials: true,
      });
      setProductData(product.data);
    }
    productData();
  }, []);

  // 抓取會員資料
  useEffect(() => {
    async function getMemberData() {
      let member = await axios.get(`${API_URL}/cart/${accParams.account}`, {
        withCredentials: true,
      });
      setMember(member.data[0]);
    }
    getMemberData();
  }, []);

  console.log(member);

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
  const localList = localArr(productData);
  console.log(localList);

  // 計算總價
  let total = 0;
  const totalMoney = (e) => {
    for (let i = 0; i < localList.length; i++) {
      total = total + localList[i].count * localList[i].product_price;
    }
  };
  totalMoney();

  return (
    <div className="cartWidth d-flex flex-column mb-4">
      {/* 上方標題 */}
      <div className="mb-3 mt-3">
        <h2 className="text-center bold">訂單確認</h2>
        <div className="titleLineBox">
          <img alt="" className="titleLine" src="img/index/line.png" />
        </div>
      </div>

      {/* 訂購項目 */}
      <div className="d-flex flex-column justify-content-start align-items-center">
        <div className="mt-3 payman11 text-center">訂 購 項 目</div>
        <div className="d-flex flex-column justify-content-start align-items-center cartCheckBG">
          {localList.map((v, i) => {
            return (
              <Payway0
                name={v.product_name}
                price={v.product_price}
                count={v.count}
                imgURL={v.product_img}
              />
            );
          })}
        </div>
      </div>

      {/* 訂購人資料 */}
      <div className="d-flex flex-column justify-content-start align-items-center">
        <div className="mt-3 payman11 text-center">收 件 人 資 料</div>
        <div className="d-flex flex-column justify-content-start align-items-center cartCheckBG">
          <form className="checkCartForm row mt-4" method="post">
            {/* 第一層 */}
            <FloatingLabel
              controlId="email"
              label="電子信箱"
              className="col-8 mb-3"
            >
              <Form.Control
                defaultValue={member.email}
                type="email"
                placeholder="name@example.com"
                required
              />
            </FloatingLabel>
            <FloatingLabel controlId="user" label="收件人" className="col-4">
              <Form.Control
                defaultValue={member.name}
                type="text"
                placeholder="收件人姓名"
                required
              />
            </FloatingLabel>
            {/* 第二層 */}
            <FloatingLabel
              controlId="phone"
              label="手機號碼"
              className="col-4 mb-3"
            >
              <Form.Control
                defaultValue={member.phone}
                type="text"
                required
                placeholder="09xxxxxxxx"
              />
            </FloatingLabel>
            <FloatingLabel controlId="user" label="收件地址" className="col-8">
              <Form.Control
                defaultValue={member.address}
                type="text"
                placeholder="收件人地址"
                required
              />
            </FloatingLabel>
            <div className="d-flex justify-content-between align-items-center mb-4">
              <div className="d-flex align-items-center">
                <input type="checkbox" />
                <label className="bold">同使用者資料(自動帶入資料)</label>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* 訂單結尾 */}
      <div className="d-flex flex-column justify-content-start align-items-center">
        <div className="mt-3 payman11 text-center">點 數 折 抵</div>
        <div className="d-flex flex-column justify-content-start align-items-center cartCheckBG">
          <div className="pointBox d-flex justify-content-end align-items-center mb-2 mt-3">
            {/* <span className="text-danger bold me-5">點數1點可折抵1元</span> */}
            <div className="me-5">
              <span className="bold">
                目前剩餘點數 :
                <span className="text-danger">{member.point}</span>
              </span>
            </div>
            <div className="me-4">
              <label className="me-2">欲折抵點數 : </label>
              <input
                className="inputPoint"
                type="text"
                onChange={(e) => {
                  if (Number(e.target.value) <= member.point) {
                    setPoint(Number(e.target.value));
                  }
                }}
              />
              <label className="ms-2">點</label>
            </div>
          </div>
          <div className="total d-flex justify-content-end align-items-center mb-3 py-3">
            <span className="bold me-1 ms-5">共計　</span>
            <span className="text-danger bold">{total - point}　</span>
            <span className="bold me-3">元</span>
          </div>
        </div>
      </div>
      {/* 結帳按鈕 */}
      <form
        method="post"
        className="mb-3 mt-2 d-flex justify-content-end pointBox"
      >
        <button type="submit" className="btn btn-danger endButton">
          結帳
        </button>
      </form>
    </div>
  );
}

export default Cartcheck;
