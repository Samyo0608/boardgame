import React, { useState } from "react";
/* 沿用memberCenter.css */
import Sidebar from "../../components/memberSidebar/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome//free-solid-svg-icons";
import MemProductItem from "../../components/memProductItem/memProductItem";

// 假資料
const Detail = [
  {
    image: "/img/memberCenter/boardgame01.png",
    proName: "夢想人生",
    status: "等待取貨",
    price: "350",
    count: "2",
    date: "2021/10/01",
    total: "700",
    endDate: "2021/10/03 01:20:03",
    tracDate: "2021/10/01 21:03:56",
    startDate: "2021/10/01 09:54:11",
    userName: "王大明",
    userPhone: "0912345678",
    address: "桃園市中壢區中央路300號",
  },
  {
    image: "/img/memberCenter/boardgame02.png",
    proName: "四季物語",
    status: "訂單完成",
    price: "300",
    count: "1",
    date: "2021/08/05",
    total: "300",
    getDate: "2021/08/08 12:20:03",
    endDate: "2021/08/07 23:22:39",
    tracDate: "2021/08/06 03:21:57",
    startDate: "2021/08/05 16:40:24",
    userName: "王大明",
    userPhone: "0912345678",
    address: "桃園市中壢區中央路300號",
  },
];

function MemberProduct(props) {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="mt-5">
      <div className="d-flex">
        <div className="ms-4 me-4 sidebarRange">
          <Sidebar />
        </div>
        <div className="rightDetail d-flex flex-column justify-content-start align-items-center">
          <p className="h2 mt-5 bold">桌遊購買</p>

          {/* 搜尋欄 */}
          <form action="" className="d-flex position-relative mt-3">
            <input
              type="text"
              placeholder="商品名稱、價格、日期( XXXX/XX/XX )"
              className="form-control proInput"
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
            />
            <button type="button" className="proButton">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </form>

          {/* map資料 */}
          {Detail.map((v, i) => {
            const Item = () => {
              return (
                <MemProductItem
                  key={i}
                  productImg={v.image}
                  productName={v.proName}
                  productStatus={v.status}
                  productPrice={v.price}
                  productCount={v.count}
                  orderDate={v.date}
                  productTotal={v.total}
                  getDate={v.getDate}
                  trafTimeEnd={v.endDate}
                  trafTimeIng={v.tracDate}
                  trafTimeStart={v.startDate}
                  userName={v.userName}
                  userPhone={v.userPhone}
                  userAddress={v.address}
                />
              );
            };

            if (inputValue === "") {
              return Item();
            } else if (
              v.proName.includes(inputValue) ||
              v.price.includes(inputValue) ||
              v.total.includes(inputValue) ||
              v.date.includes(inputValue)
            ) {
              return Item();
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default MemberProduct;

