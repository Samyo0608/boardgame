import React, { useState, useEffect } from "react";
import "./memPoint.css";
import moment from "moment";
import axios from "axios";
import { API_URL } from "../../configs/config";

function MemPoint(props) {
  const { order } = props;
  // 產品存入
  const [product, setProduct] = useState([]);
  // 設定圖片第一張位置
  const [time, setTime] = useState(2);
  // 點數總和
  const created_time = moment(order.created_time).format("YYYY-MM-DD");
  const createPoint = parseInt(order.total / 50);
  // 產生圖片矩陣
  const proName = order.product_name.split(",");

  // 圖片設定timeout播放(更換url)(這個是更換i值)
  useEffect(() => {
    for (let i = 0; i < proName.length; i++) {
      setTimeout(function () {
        setTime(i);
      }, 3000 * i);
    }
  }, []);

  // 這個是圖片寫入
  const name = () => {
    for (let x = 0; x < product.length; x++) {
      if (product[x].product_name === proName[time]) {
        return product[x].product_img;
      }
    }
  };

  // 撈取產品資訊，傳給component
  useEffect(() => {
    async function product() {
      let product = await axios.get(`${API_URL}/cart/`, {
        withCredentials: true,
      });
      setProduct(product.data);
    }
    product();
  }, []);

  return (
    <div className="object-pro mt-3 mb-3">
      <div className="row mt-2">
        {/* Point 左邊圖 start*/}
        <div className="col-3 ms-4">
          <img
            alt=""
            src={`/product_img/550x400/${name()}`}
            className="imgPoint"
          />
        </div>
        {/* Point 左邊圖 end*/}

        {/* Point 中間內容 start*/}
        <div className="col-5 d-flex flex-column justify-content-center ms-4">
          <div className="col-12 h3 bold mb-4">
            {order.order_id}　　${order.total}
          </div>
          <div className="col-12 h5 bold">訂單日期　　：{created_time}</div>
        </div>
        {/* Point 中間內容 end*/}
        {/* Point 右邊點數 start*/}

        <div className="col-3 d-flex justify-content-center align-items-center">
          <div className="me-1 bold point point-mem h4">P</div>
          <span className="h3 text-main me-5 bold">
            {createPoint - order.cost_point}
          </span>
        </div>
        {/* Point 右邊點數 end*/}
      </div>
    </div>
  );
}

export default MemPoint;
