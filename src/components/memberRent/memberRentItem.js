import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./memberRentItem.css";
import axios from "axios";
import { API_URL } from "../../configs/config";

const Swal = require("sweetalert2");

function MemberRentItem(props) {
  const { roomImg, type, userStatus, price, costStatus, predate, rentDate } =
    props;
  // 讀取資料庫
  const [bookingContent, setbookingContent] = useState([]);

  useEffect(async () => {
    let bookingContent = await axios.post(`${API_URL}/booking`);
    setbookingContent(bookingContent.data);
  }, []);

  const [fields, setFields] = useState({
    room: "",
    name: "",
    phone: "",
    startTime: "",
    endTime: "",
    order_date: "",
  });
  const handleFieldChange = (e) => {
    console.log(e.target.name, e.target.value, e.target.value);
    const name = e.target.name;
    const value = e.target.value;
    const updatedFields = { ...fields, [name]: value };
    setFields(updatedFields);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      Swal.fire({
        title: "想做什麼修改呢❓",
        text: "請選擇是＂修改預約時間＂或是＂取消本次預約＂",
        showDenyButton: true,
        confirmButtonText: "修改預約時間",
        denyButtonText: `取消預約`,
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "更改預約時間",
            html: `
              <div class="swalForm">
              <label class="">房型： </label>
              <select class="swal2-input name="room"
              <option value="">房型...</option>
              <option name="fourRoom" value="fourRoom">四人房</option>
              <option name="sixRoom" value="sixRoom">六人房</option></select><br>
              姓名：<input class="swal2-input" name="name" type="text" ><br>
              電話：<input class="swal2-input" name="phone" type="tel" pattern="^[0-9]*[1-9][0-9]*$" minLength="10" maxLength="10"><br>
              開始時間：<input type="datetime-local" class="swal2-input" name="startTime"><br>
              結束時間：<input type="datetime-local" class="swal2-input" name="endTime">
              </div>`,
            showDenyButton: true,
            confirmButtonText: "確認送出",
            denyButtonText: `取消更改`,
          }).then((result) => {
            if (result.isConfirmed) {
              axios.post(`http://localhost:3001/api/booking/editRent`, fields, {
                withCredentials: true,
              });
              Swal.fire("已收到您的修改需求", "", "success");
            } else if (result.isDenied) {
              Swal.fire("感謝您", "", "info");
            }
          });
        } else if (result.isDenied) {
          Swal.fire({
            title: "確認取消嗎❓",
            text: "此項更動無法復原，請確認是否是要執行＂取消預約＂",
            showDenyButton: true,
            confirmButtonText: "是的，我要取消",
            denyButtonText: `不，我不取消`,
          }).then((result) => {
            if (result.isConfirmed) {
              axios.post(
                `http://localhost:3001/api/booking/deleteRent`,
                fields,
                {
                  withCredentials: true,
                }
              );
              Swal.fire("已將您的預約取消😢", "", "success");
            } else if (result.isDenied) {
              Swal.fire("很高興您不取消預約😄", "", "info");
            }
          });
        }
      });
    } catch {
      console.log("handleSubmit", e);
    }
  }

  return (
    <>
      <form onChange={handleFieldChange} onSubmit={handleSubmit}>
        <div className="rent">
          <div className="rentImg">
            <img alt={roomImg} src={roomImg} />
          </div>
          <div className="rentWord">
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
                className="btn changeBtn"
                name="changeTime"
                value="change"
              >
                更改／取消預約
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default MemberRentItem;
