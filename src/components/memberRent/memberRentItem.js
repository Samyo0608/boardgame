import React, { useState } from "react";
import "./memberRentItem.css";

function MemberRentItem(props) {
  const { roomImg, type, userStatus, price, costStatus, predate, rentDate } =
    props;

  const [changeTime, setChangeTime] = useState(true);

  return (
    <div className="object-rent d-flex flex-column mt-3 mb-3">
      <div>
        <div className="d-flex position-relative mt-2">
          {/* Rent上面左邊圖片 start*/}
          <div className="ms-4">
            <img alt="123" src={roomImg} className="imgRent" />
          </div>
          {/* Rent上面左邊圖片 end*/}

          {/* Rent上面右邊部分 start*/}
          <div className="row ms-5">
            <div className="col-6 h5 bold mb-5">房間種類　　：{type}</div>
            <div className="col-6 h5 bold mb-5">
              預約狀態　：<span className="text-danger">{userStatus}</span>
            </div>
            <div className="col-6 h5 bold mb-5">價格　　　　：{price}</div>
            <div className="col-6 h5 bold mb-5">
              訂單狀態　：<span className="text-danger">{costStatus}</span>
            </div>
            <div className="col-12 h5 bold mb-5">
              <span className="text-danger">預約時間</span>　　： {predate}
            </div>
            <div className="col-12 h5 bold">
              訂單成立日期：　　　　{rentDate}
            </div>
          </div>
          {/* Rent上面右邊部分 end*/}
        </div>
      </div>
      {/* Rent下面button start*/}
      <div className="d-flex justify-content-end">
        <button
          className="BtnRentChange me-3 bold"
          disabled={userStatus !== "尚未報到" ? true : false}
        >
          更換時間
        </button>
        <button
          className="BtnRentCancel me-5 bold"
          disabled={userStatus !== "尚未報到" ? true : false}
        >
          取消預約
        </button>
      </div>
      {/* Rent下面button end*/}
    </div>
  );
}

export default MemberRentItem;
