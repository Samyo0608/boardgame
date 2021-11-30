import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FloatingLabel, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "../../css/cart.css";
import Payway0 from "../../components/cart/Payway0";
import axios from "axios";
import { API_URL } from "../../configs/config";
import Swal from "sweetalert2";

function Cartcheck(props) {
  // 儲存api-product資料
  const [productData, setProductData] = useState([]);
  // 抓取網址上的account
  const accParams = useParams();
  // 儲存api-member資料
  const [member, setMember] = useState({
    id: 0,
    account: "",
    name: "",
    email: "",
    phone: "",
    address: "",
    point: 0,
  });
  // 儲存欲使用的point
  const [point, setPoint] = useState(0);
  //checkbox 帶入資料
  const [check, setCheck] = useState(false);
  //儲存最後結帳要送出的資料
  const [finalData, setFinalData] = useState({
    email: "",
    name: "",
    phone: "",
    address: "",
    newPoint: 0,
    point: 0,
    created_point: 0,
  });

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

  // 計算總價
  const totalMoney = (cnt) => {
    let total = 0;
    for (let i = 0; i < cnt.length; i++) {
      total = total + cnt[i].count * Number(cnt[i].product_price);
    }
    return total;
  };
  let AllPrice = totalMoney(localList);

  // forEach產生localStorage的商品、價格、數量串(照順序)
  const productName = (Arr) => {
    let productName = [];
    let productPrice = [];
    let productCount = [];
    let proNameString = "";
    let proPriceString = "";
    let proCountString = "";
    Arr.forEach((v) => {
      productName.push(v.product_name);
      productPrice.push(v.product_price);
      productCount.push(v.count);
      proNameString = productName.toString();
      proPriceString = productPrice.toString();
      proCountString = productCount.toString();
    });
    return { proNameString, proPriceString, proCountString };
  };
  const productNameTotal = productName(localList);

  // input onChange事件(把finalData要的資料存入狀態)
  const handleChange = (e) => {
    let newFinalData = { ...finalData };
    newFinalData[e.target.name] = e.target.value;
    newFinalData.newPoint =
      member.point - point + parseInt((AllPrice - point) / 50);
    newFinalData.total = AllPrice - point;
    let assign = Object.assign(newFinalData, productNameTotal);
    setFinalData(assign);
  };

  // 點擊同使用者資料後觸發資料帶入以及刪除事件
  useEffect(() => {
    let newFinalData = { ...finalData };
    let assign = Object.assign(newFinalData, productNameTotal);
    if (check) {
      assign.name = member.name;
      assign.email = member.email;
      assign.phone = member.phone;
      assign.address = member.address;
      assign.newPoint =
        member.point - point + parseInt((AllPrice - point) / 50);
      assign.total = AllPrice - point;
    } else {
      assign = {};
    }
    setFinalData(assign);
  }, [check]);

  // 送出結帳
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      if (point <= member.point) {
        let res = await axios.post(
          `${API_URL}/cart/member/${accParams.account}`,
          finalData,
          {
            withCredentials: true,
          }
        );
        let order = await axios.post(
          `${API_URL}/cart/order/${accParams.account}`,
          finalData,
          {
            withCredentials: true,
          }
        );
        Swal.fire({
          icon: "success",
          title: "結帳成功",
          text: "感謝您的消費",
        }).then((result) => {
          localStorage.clear();
          window.location.replace(`/memberCenter${accParams.account}`);
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "折抵點數過多!",
          text: "欲折抵點數不可大於剩餘點數",
        });
      }
    } catch (e) {
      console.log("上傳失敗", e);
    }
  }

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
                defaultValue={check ? member.email : ""}
                type="email"
                name="email"
                placeholder="name@example.com"
                required
                onChange={handleChange}
              />
            </FloatingLabel>
            <FloatingLabel controlId="user" label="收件人" className="col-4">
              <Form.Control
                defaultValue={check ? member.name : ""}
                type="text"
                name="name"
                placeholder="收件人姓名"
                required
                onChange={handleChange}
              />
            </FloatingLabel>
            {/* 第二層 */}
            <FloatingLabel
              controlId="phone"
              label="手機號碼"
              className="col-4 mb-3"
            >
              <Form.Control
                defaultValue={check ? member.phone : ""}
                type="text"
                name="phone"
                required
                placeholder="09xxxxxxxx"
                onChange={handleChange}
              />
            </FloatingLabel>
            <FloatingLabel controlId="user" label="收件地址" className="col-8">
              <Form.Control
                defaultValue={check ? member.address : ""}
                type="text"
                name="address"
                placeholder="收件人地址"
                required
                onChange={handleChange}
              />
            </FloatingLabel>
            <div className="d-flex justify-content-between align-items-center mb-4">
              <div className="d-flex align-items-center">
                <input
                  name="checkbox"
                  id="checkbox"
                  type="checkbox"
                  onChange={(e) => {
                    setCheck(e.target.checked);
                  }}
                />
                <label for="checkbox" className="bold">
                  同使用者資料(自動帶入資料)
                </label>
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
                required
                onChange={(e) => {
                  // if (Number(e.target.value) <= member.point) {
                  setPoint(Number(e.target.value));
                  let newPoint = { ...finalData };
                  newPoint.newPoint =
                    member.point -
                    Number(e.target.value) +
                    parseInt((AllPrice - Number(e.target.value)) / 50);
                  newPoint.total = AllPrice - Number(e.target.value);
                  setFinalData(newPoint);
                  // }
                }}
              />
              <label className="ms-2">點</label>
            </div>
          </div>
          <div className="total d-flex justify-content-end align-items-center mb-3 py-3">
            <span className="bold me-1 ms-5">本次可獲得</span>
            <span className="text-danger bold me-1">
              {parseInt((AllPrice - point) / 50)}
            </span>
            <span className="bold me-3"> 點</span>
            <span className="bold me-1 ms-5">共計　</span>
            <span className="text-danger bold">{AllPrice - point}　</span>
            <span className="bold me-3">元</span>
          </div>
        </div>
      </div>
      {/* 結帳按鈕 */}
      <form
        onSubmit={handleSubmit}
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
