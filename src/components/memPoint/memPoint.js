import React from "react";
import "./memPoint.css";

function MemPoint(props) {
  const { pointImg, pointType, pointPrice, pointDate, point } = props;
  return (
    <div className="object-pro mt-3 mb-3">
      <div className="row mt-2">
        {/* Point 左邊圖 start*/}
        <div className="col-3 ms-4">
          <img alt="" src={pointImg} className="imgPoint" />
        </div>
        {/* Point 左邊圖 end*/}

        {/* Point 中間內容 start*/}
        <div className="col-5 d-flex flex-column justify-content-center ms-4">
          <div className="col-12 h3 bold mb-4">
            {pointType}　　${pointPrice}
          </div>
          <div className="col-12 h5 bold">訂單完成日　　：{pointDate}</div>
        </div>
        {/* Point 中間內容 end*/}
        {/* Point 右邊點數 start*/}

        <div className="col-3 d-flex justify-content-center align-items-center">
          <div className="me-1 bold point point-mem h4">P</div>
          <span className="h1 text-main me-5 bold">+{point}</span>
        </div>
        {/* Point 右邊點數 end*/}
      </div>
    </div>
  );
}

export default MemPoint;
