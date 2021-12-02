import React, { useState, useEffect, useRef } from "react";
import "./memberRentItem.css";
import axios from "axios";
import { API_URL } from "../../configs/config";

const Swal = require("sweetalert2");

function MemberRentItem(props) {
  const {
    roomId,
    roomImg,
    type,
    userStatus,
    price,
    costStatus,
    predate,
    rentDate,
    roomValid,
  } = props;

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      Swal.fire({
        title: "是否確認取消預約❓",
        text: "此項更動無法復原，請確認是否是要執行＂取消預約＂",
        showDenyButton: true,
        confirmButtonText: "是的，我要取消",
        denyButtonText: `不，我不取消`,
      }).then((result) => {
        if (result.isConfirmed) {
          axios.post(
            `http://localhost:3001/api/booking/deleteRent`,
            { roomId },
            {
              withCredentials: true,
            }
          );
          Swal.fire("已將您的預約取消😢", "", "success");
        } else if (result.isDenied) {
          Swal.fire("很高興您不取消預約😄", "", "info");
        }
      });
    } catch {
      console.log("handleSubmit", e);
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="rent">
          <div className="rentImg">
            <img alt={roomImg} src={roomImg} />
          </div>
          <div className="rentWord">
            <p>訂單編號：{roomId}</p>
            <p>訂單成立日期：{rentDate}</p>
            <p>房間種類：{type}</p>
            <p>
              預約狀態：<span>{userStatus}</span>
            </p>
            <p>預約時間：{predate}</p>
            <p>
              訂單狀態：<span>{costStatus}</span>
            </p>
            <p>價格：{price}</p>
            <div className="rentBtn">
              <button
                disabled={roomValid === 0 ? true : false}
                className="btn changeBtn"
                name="changeTime"
              >
                取消預約
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default MemberRentItem;
