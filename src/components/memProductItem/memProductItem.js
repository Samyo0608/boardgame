import React, { useState } from "react";
import "./memProductItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome//free-solid-svg-icons";

function MemProductItem(props) {
  const {
    productImg,
    productName,
    productStatus,
    productPrice,
    productCount,
    orderDate,
    productTotal,
    getDate,
    trafTimeEnd,
    trafTimeIng,
    trafTimeStart,
    userName,
    userPhone,
    userAddress,
  } = props;
  const [display, setDisplay] = useState(false);
  const [rotate, setRotate] = useState(false);
  return (
    <div className="object-pro d-flex flex-column align-items-center mt-3 mb-3">
      <div className="d-flex position-relative mt-2">
        <div className="ms-4">
          <img alt="" src={productImg} className="objectImg" />
        </div>
        <div className="row ms-5">
          <div className="col-6 h5 bold mb-5">商品名稱　　：{productName}</div>
          <div className="col-6 h5 bold mb-5">
            訂單狀態　　：<span className="text-danger">{productStatus}</span>
          </div>
          <div className="col-6 h5 bold mb-5">
            單價　　　　：${productPrice}
          </div>
          <div className="col-6 h5 bold mb-5">數量　　　　：{productCount}</div>
          <div className="col-6 h5 bold">訂單成立日期：{orderDate}</div>
          <div className="col-6 h5 bold">共計　　　　：${productTotal}</div>
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
      <div
        className={`${
          display ? "displayOpen" : "displayClose"
        } pro-down d-flex flex-column mt-2`}
      >
        <div className="ms-5 mt-3">
          <hr className="pro-hr" />
          <p className="h4 bold">運送狀態</p>
        </div>
        <div className="d-flex flex-column align-items-center">
          <div className="pro-loading pt-3 text-center h5 bold mb-4">
            {getDate !== undefined && (
              <div className="row">
                <p className="col-6">{getDate}</p>
                <p className="col-6">已取件</p>
              </div>
            )}
            {trafTimeEnd !== undefined && (
              <div className="row">
                <p className="col-6">{trafTimeEnd}</p>
                <p className="col-6">抵達指定門市</p>
              </div>
            )}
            {trafTimeIng !== undefined && (
              <div className="row">
                <p className="col-6">{trafTimeIng}</p>
                <p className="col-6">商品運送中</p>
              </div>
            )}
            {trafTimeStart !== undefined && (
              <div className="row">
                <p className="col-6">{trafTimeStart}</p>
                <p className="col-6">訂單已接受</p>
              </div>
            )}
          </div>
          <div className="row ms-5">
            <div className="col-6 h5 bold mb-5">收件人　　　：{userName}</div>
            <div className="col-6 h5 bold mb-5">連絡電話　　：{userPhone}</div>
            <div className="col-12 h5 bold mb-5">
              收件地址　　：{userAddress}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MemProductItem;
