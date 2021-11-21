import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Form, Row, Col, Button } from "react-bootstrap";
import "../../css/rePassword.css";
import Sidebar from "../../components/memberSidebar/index";
import axios from "axios";
import { API_URL } from "../../configs/config";
import Swal from "sweetalert2";

function RePassword(props) {
  const paramsData = useParams();
  // 儲存Input(密碼)變數的state
  const [passwordData, setPasswordData] = useState({
    password: "",
    newPassword: "",
    reNewPassword: "",
  });

  // Input change的事件
  const handleChange = (e) => {
    let newPasswordData = { ...passwordData };
    newPasswordData[e.target.name] = e.target.value;
    setPasswordData(newPasswordData);
  };

  // sweetalert2 toast
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 2000,
  });

  // 表單送出的事件
  async function handleSubmit(e) {
    e.preventDefault();
    if (passwordData) {
      try {
        let update = await axios.post(
          `${API_URL}/member/rePassword/${paramsData.account}`,
          passwordData,
          {
            withCredentials: true,
          }
        );
        console.log(update.data);
        if (update.data.code === "401") {
          Toast.fire({
            icon: "error",
            title: "舊密碼輸入錯誤",
          });
        } else if (update.data.code === "404") {
          Toast.fire({
            icon: "error",
            title: "資料庫上傳失敗，請洽網站管理員",
          });
        } else {
          Swal.fire({
            icon: "success",
            title: "密碼更新成功",
            text: "請小心管理您的密碼",
          }).then((res) => {
            window.location.replace(`/memberCenter${paramsData.account}`);
          });
        }
      } catch (e) {
        console.log(e);
        Toast.fire({
          icon: "question",
          title: "更新失敗，請洽網站管理員",
        });
      }
    } else if (passwordData.newPassword !== passwordData.reNewPassword) {
      Toast.fire({
        icon: "error",
        title: "新密碼驗證錯誤",
      });
    } else {
      Toast.fire({
        icon: "info",
        title: "舊密碼或新密碼尚未輸入",
      });
    }
  }

  return (
    <div className="mt-5">
      <div className="d-flex">
        <div className="ms-4 me-4 sidebarRange">
          <Sidebar />
        </div>
        <div className="rightDetail d-flex flex-column justify-content-start align-items-center">
          <p className="h2 bold titleMargin text-center mt-5">密碼修改</p>
          <div className="mb-5 bold formfize-password text-center">
            <p className="opacity-75">
              為了確保使用者帳戶的安全，請再輸入一次原來的密碼
            </p>
            <hr />
          </div>
          <div className=" d-flex flex-column justify-content-between align-items-center mt-5">
            <Form className="bold" onSubmit={handleSubmit}>
              <Form.Group as={Row} className="mb-3" controlId="password">
                <Form.Label column sm="4">
                  舊密碼確認
                </Form.Label>
                <Col sm="8">
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="請輸入舊密碼"
                    minlength="8"
                    maxlength="20"
                    required
                    onChange={handleChange}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="newPassword">
                <Form.Label column sm="4">
                  新密碼
                </Form.Label>
                <Col sm="8">
                  <Form.Control
                    type="password"
                    name="newPassword"
                    placeholder="請輸入新密碼"
                    minlength="8"
                    maxlength="20"
                    required
                    onChange={handleChange}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="reNewPassword">
                <Form.Label column sm="4">
                  新密碼確認
                </Form.Label>
                <Col sm="8">
                  <Form.Control
                    type="password"
                    name="reNewPassword"
                    placeholder="新密碼確認"
                    minlength="8"
                    maxlength="20"
                    required
                    onChange={handleChange}
                  />
                </Col>
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                className="mt-5 btnWidth ms-5"
              >
                確認
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RePassword;
