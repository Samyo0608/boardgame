import React, { useState, useEffect } from "react";
import "./memProductItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome//free-solid-svg-icons";
import moment from "moment";
import axios from "axios";
import { API_URL } from "../../configs/config";

function MemProductItem(props) {
  const { detail } = props;
  const arr = detail;
  const [display, setDisplay] = useState(false);
  const [rotate, setRotate] = useState(false);
  const [product, setProduct] = useState([]);

  // 撈取產品資料
  useEffect((e) => {
    async function product() {
      let product = await axios
        .get(`${API_URL}/cart/`, {
          withCredentials: true,
        })
        .then((res) => {
          setProduct(res.data);
        });
    }
    product();
  }, []);

  // 訂單狀態
  const status = {
    1: "訂單已接受",
    2: "正在路上",
    3: "訂單完成",
  };

  //將product_name、product_price、product_count弄成陣列
  let name = arr.product_name.split(",");
  let price = arr.product_price.split(",");
  let count = arr.product_count.split(",");
  // 產品名稱比對購買產品名稱，然後產生圖片路徑陣列
  const ARRR = () => {
    let array = [];
    for (let i = 0; i < product.length; i++) {
      for (let j = 0; j < name.length; j++) {
        if (product[i].product_name === name[j]) {
          array.push(product[i].product_img);
        }
      }
    }
    return array;
  };
  //將product_name、product_price、product_count、imgURL集合成相對應的陣列物件
  const TotalArray = [name, price, count, ARRR()];
  let obj = [];
  const createArray = () => {
    for (let i = 0; i < count.length; i++) {
      obj[i] = {
        name: TotalArray[0][i],
        price: TotalArray[1][i],
        count: TotalArray[2][i],
        imgURL: TotalArray[3][i],
      };
    }
    return obj;
  };

  //修改時間顯示型態
  let create_date = moment(arr.created_time).format("YYYY-MM-DD");
  let road_time = moment(arr.road_time).format("YYYY-MM-DD HH:mm:ss");
  let arrive_time = moment(arr.arrive_time).format("YYYY-MM-DD HH:mm:ss");
  let got_time = moment(arr.got_time).format("YYYY-MM-DD HH:mm:ss");

  // 處理地址顯示(拔掉",")
  let addressArray = arr.customer_address.split(",");
  let address = addressArray[0].concat(addressArray[1], addressArray[2]);

  return (
    <div className="object-pro d-flex flex-column align-items-center mt-3 mb-3">
      <div className="d-flex position-relative mt-2">
        <div className="ms-4">
          <img
            id="img"
            alt=""
            src={product ? `/product_img/550x400/${ARRR()[0]}` : ""}
            className="objectImg"
          />
        </div>
        <div className="row ms-5 mt-3">
          <div className="col-6 h5 bold">訂單成立日期：{create_date}</div>
          <div className="col-6 h5 bold mb-5">
            訂單狀態　　：
            <span className="text-danger">{status[arr.order_check]}</span>
          </div>
          <div className="col-6 h5 bold">商品種類　　：{name.length}</div>
          <div className="col-6 h5 bold">共計(點數已折)　 ：${arr.total}</div>
        </div>
        <button
          className="pro-arrow"
          onClick={(e) => {
            setDisplay(!display);
            setRotate(!rotate);
          }}
        >
          <FontAwesomeIcon
            icon={faChevronRight}
            className={`${rotate ? "arrowRotateOpen" : "arrowRotateClose"}`}
          />
        </button>
      </div>

      {/* 下半部 */}
      <div
        className={`${
          display ? "displayOpen" : "displayClose"
        } pro-down d-flex flex-column mt-2 align-items-center`}
      >
        <hr className="pro-hr" />
        <div className="mb-2 d-flex flex-column align-items-around pro-product text-center">
          {createArray().map((v, i) => {
            return (
              <div className="row align-items-center mt-2">
                <figure className="col-3">
                  <img
                    src={product ? `/product_img/550x400/${v.imgURL}` : ""}
                    alt=""
                    className="downImg"
                  />
                </figure>
                <div className="h5 bold col-3">{v.name}</div>
                <div className="h5 bold col-3">數量：{v.count}</div>
                <div className="h5 bold col-3">
                  ${Number(v.price) * Number(v.count)}
                </div>
              </div>
            );
          })}
        </div>
        <div className="d-flex flex-column align-items-center">
          <div className="pro-loading pt-3 text-center h5 bold mb-4">
            {got_time !== "Invalid date" && (
              <div className="row">
                <p className="col-6">{got_time}</p>
                <p className="col-6">已取件</p>
              </div>
            )}
            {arrive_time !== "Invalid date" && (
              <div className="row">
                <p className="col-6">{arrive_time}</p>
                <p className="col-6">待取件</p>
              </div>
            )}
            {road_time !== "Invalid date" && (
              <div className="row">
                <p className="col-6">{road_time}</p>
                <p className="col-6">商品運送中</p>
              </div>
            )}
            {arr.startDate !== "Invalid date" && (
              <div className="row">
                <p className="col-6">{create_date}</p>
                <p className="col-6">訂單已接受</p>
              </div>
            )}
          </div>
          <div className="row ms-5 mt-3">
            <div className="col-7 h5 bold mb-5">
              收件人　　　：{arr.customer_name}
            </div>
            <div className="col-5 h5 bold mb-5">
              連絡電話　　：{arr.customer_phone}
            </div>
            <div className="col-7 h5 bold mb-5">
              收件地址　　：
              {address.includes(",") ? address : arr.customer_address}
            </div>
            <div className="col-5 h5 bold mb-5">
              使用點數　　：{arr.cost_point}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MemProductItem;
