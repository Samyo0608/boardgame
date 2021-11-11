import React from "react";
import Sidebar from "../../components/memberSidebar/index";
import "../../css/memberPoint.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome//free-solid-svg-icons";

function MemberPoint(props) {
  return (
    <div className="mt-5">
      <div className="d-flex">
        <div className="ms-4 me-4 sidebarRange">
          <Sidebar />
        </div>
        <div className="rightDetail d-flex flex-column justify-content-start align-items-center">
          <p className="h2 mt-5 bold">點數明細</p>
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
          {/* 頂端點數總和 start */}
          <div className="object-pro d-flex justify-content-center mt-3 mb-5">
            <p className="h2 bold text-main me-2 pointLineHeight">目前點數</p>
            <div className="d-flex justify-content-center align-items-center">
              <div className="me-1 bold point point-mem h4">P</div>
              <span className="h1 text-main me-5 bold">78</span>
            </div>
          </div>
          {/* 頂端點數總和 end */}
          {/* 六人房 start */}
          <div className="object-pro mt-3 mb-3">
            <div className="row mt-2">
              {/* Point 左邊圖 start*/}
              <div className="col-3 ms-4">
                <img
                  alt=""
                  src="/img/booking/sixRoom.jpg"
                  className="imgPoint"
                />
              </div>
              {/* Point 左邊圖 end*/}

              {/* Point 中間內容 start*/}
              <div className="col-5 d-flex flex-column justify-content-center ms-4">
                <div className="col-12 h3 bold mb-4">六人房　　$200</div>
                <div className="col-12 h5 bold">訂單完成日　　：2021/09/15</div>
              </div>
              {/* Point 中間內容 end*/}
              {/* Point 右邊點數 start*/}

              <div className="col-3 d-flex justify-content-center align-items-center">
                <div className="me-1 bold point point-mem h4">P</div>
                <span className="h1 text-main me-5 bold">+4</span>
              </div>
              {/* Point 右邊點數 end*/}
            </div>
          </div>
          {/* 六人房 end */}

          {/* 說書人 start */}
          <div className="object-pro mt-3 mb-3">
            <div className="row mt-2">
              {/* Point 左邊圖 start*/}
              <div className="col-3 ms-4">
                <img alt="" src="/img/index/game5.jpg" className="imgPoint" />
              </div>
              {/* Point 左邊圖 end*/}

              {/* Point 中間內容 start*/}
              <div className="col-5 d-flex flex-column justify-content-center ms-4">
                <div className="col-12 h3 bold mb-4">說書人　　$900</div>
                <div className="col-12 h5 bold">訂單完成日　　：2021/09/14</div>
              </div>
              {/* Point 中間內容 end*/}
              {/* Point 右邊點數 start*/}

              <div className="col-3 d-flex justify-content-center align-items-center">
                <div className="me-1 bold point point-mem h4">P</div>
                <span className="h1 text-main me-5 bold">+18</span>
              </div>
              {/* Point 右邊點數 end*/}
            </div>
          </div>
          {/* 說書人 end */}

          {/* 四季物語 start */}
          <div className="object-pro mt-3 mb-3">
            <div className="row mt-2">
              {/* Point 左邊圖 start*/}
              <div className="col-3 ms-4">
                <img
                  alt=""
                  src="/img/memberCenter/boardgame02.png"
                  className="imgPoint"
                />
              </div>
              {/* Point 左邊圖 end*/}

              {/* Point 中間內容 start*/}
              <div className="col-5 d-flex flex-column justify-content-center ms-4">
                <div className="col-12 h3 bold mb-4">四季物語　　$300</div>
                <div className="col-12 h5 bold">訂單完成日　　：2021/08/05</div>
              </div>
              {/* Point 中間內容 end*/}
              {/* Point 右邊點數 start*/}

              <div className="col-3 d-flex justify-content-center align-items-center">
                <div className="me-1 bold point point-mem h4">P</div>
                <span className="h1 text-main me-5 bold">+6</span>
              </div>
              {/* Point 右邊點數 end*/}
            </div>
          </div>
          {/* 四季物語 end */}
        </div>
      </div>
    </div>
  );
}

export default MemberPoint;
