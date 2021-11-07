import React, { useState } from "react";
import Sidebar from "../../components/memberSidebar/index";
import "../../css/memberRent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome//free-solid-svg-icons";

function MemberRent(props) {
  return (
    <div className="mt-5">
      <div className="d-flex">
        <div className="ms-4 me-4 sidebarRange">
          <Sidebar />
        </div>
        <div className="rightDetail d-flex flex-column justify-content-start align-items-center">
          <p className="h2 mt-5 bold">場地租賃</p>
          <form action="" className="d-flex position-relative mt-3">
            <input
              type="text"
              placeholder="請輸入關鍵字(房型、價格、日期)"
              className="form-control proInput"
            />
            <button type="button" className="proButton">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </form>
          {/* Rent01 */}
          <div className="object-pro d-flex flex-column mt-3 mb-3">
            <div>
              <div className="d-flex position-relative mt-2">
                {/* Rent上面左邊圖片 start*/}
                <div className="ms-4">
                  <img
                    alt=""
                    src="img/booking/fourRoom-1.png"
                    className="imgRent"
                  />
                </div>
                {/* Rent上面左邊圖片 end*/}

                {/* Rent上面右邊部分 start*/}
                <div className="row ms-5">
                  <div className="col-6 h5 bold mb-5">房間種類　　：四人房</div>
                  <div className="col-6 h5 bold mb-5">
                    預約狀態　：<span className="text-danger">尚未報到</span>
                  </div>
                  <div className="col-6 h5 bold mb-5">價格　　　　：$150</div>
                  <div className="col-6 h5 bold mb-5">
                    訂單狀態　：<span className="text-danger">已付款</span>
                  </div>
                  <div className="col-12 h5 bold mb-5">
                    <span className="text-danger">預約時間</span>　　：
                    2021/10/10 下午(13:00-17:00)
                  </div>
                  <div className="col-12 h5 bold">
                    訂單成立日期：　　　　2021/10/01
                  </div>
                </div>
                {/* Rent上面右邊部分 end*/}
              </div>
            </div>
            {/* Rent下面button start*/}
            <div className="d-flex justify-content-end">
              <button className="BtnRentChange me-3 bold">更換時間</button>
              <button className="BtnRentCancel me-5 bold">取消預約</button>
            </div>
            {/* Rent下面button end*/}
          </div>

          {/* Rent02 */}
          <div className="object-pro d-flex flex-column mt-3 mb-3">
            <div>
              <div className="d-flex position-relative mt-2">
                {/* Rent上面左邊圖片 start*/}
                <div className="ms-4">
                  <img
                    alt=""
                    src="img/booking/sixRoom.jpg"
                    className="imgRent"
                  />
                </div>
                {/* Rent上面左邊圖片 end*/}

                {/* Rent上面右邊部分 start*/}
                <div className="row ms-5">
                  <div className="col-6 h5 bold mb-5">房間種類　　：六人房</div>
                  <div className="col-6 h5 bold mb-5">
                    預約狀態　：<span className="text-danger">完成報到</span>
                  </div>
                  <div className="col-6 h5 bold mb-5">價格　　　　：$200</div>
                  <div className="col-6 h5 bold mb-5">
                    訂單狀態　：<span className="text-danger">已付款</span>
                  </div>
                  <div className="col-12 h5 bold mb-5">
                    <span className="text-danger">預約時間</span>　　：
                    2021/09/20 上午(09:00-12:00)
                  </div>
                  <div className="col-12 h5 bold">
                    訂單成立日期：　　　　2021/09/15
                  </div>
                </div>
                {/* Rent上面右邊部分 end*/}
              </div>
            </div>
            {/* Rent下面button start*/}
            <div className="d-flex justify-content-end">
              <button className="BtnRentChange me-3 bold" disabled>
                更換時間
              </button>
              <button className="BtnRentCancel me-5 bold" disabled>
                取消預約
              </button>
            </div>
            {/* Rent下面button end*/}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MemberRent;
