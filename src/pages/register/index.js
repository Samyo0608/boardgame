import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Image, Form, Row, Col } from "react-bootstrap";
import "../../css/register.css";
import { API_URL } from "../../configs/config";
import axios from "axios";
import Swal from "sweetalert2";

function Register(props) {
  //儲存email、帳號、密碼、第二次密碼
  const [member, setMember] = useState({
    email: "",
    account: "",
    password: "",
    rePassword: "",
  });

  // sweetAlert2 toast
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 2000,
  });

  async function handleSubmit(e) {
    //e.preventDefault() -> 取消DOM的預設功能
    e.preventDefault();
    if (
      member.password === member.rePassword &&
      member.email !== "" &&
      member.account !== ""
    ) {
      try {
        let req = await axios.post(`${API_URL}/auth/register`, member, {
          // res cors -> cookie
          // .withCredentials = true時，發現你與呼叫的API的網站 不同源時，瀏覽器一樣會幫你發 Request，但是會把 Response 給擋下來，不讓你的 JavaScript 拿到並且傳回錯誤。
          // .withCredentials = true使用時，後端必須搭配 Access-Control-Allow-Origin 且不能為*，要給指定路徑，如express中的
          // cors ({origin:"localhost:XXXX"})
          withCredentials: true,
        });
        if (req.data.code === "102") {
          Toast.fire({
            icon: "error",
            title: "此email已有人使用",
          });
        } else if (req.data.code === "106") {
          Toast.fire({
            icon: "error",
            title: "此帳號已有人使用",
          });
        } else if (req.data.code === "103") {
          Toast.fire({
            icon: "error",
            title: "註冊失敗，請洽管理員",
          });
        } else {
          Swal.fire({
            icon: "success",
            title: "註冊成功",
            text: "歡迎加入遊戲職人",
          }).then((res) => {
            props.history.push("/login");
          });
        }
      } catch (e) {
        console.log("handleSubmit", e);
        Toast.fire({
          icon: "question",
          title: "註冊失敗，請洽網站管理員",
        });
      }
    } else if (member.password !== member.rePassword) {
      Toast.fire({
        icon: "error",
        title: "密碼驗證失敗",
      });
    } else {
      Toast.fire({
        icon: "error",
        title: "信箱或帳號未填寫",
      });
    }
  }

  const handleChange = (e) => {
    let newMember = { ...member };
    newMember[e.target.name] = e.target.value;
    setMember(newMember);
  };

  return (
    <div className="login">
      <Image
        src="../../img/register/registerBG.jpg"
        className="backgroundImage mt-5"
      />
      <div className="d-flex flex-column CenterDiv justify-content-center align-items-center">
        <p className="h2 mt-5 bold">新會員註冊</p>
        <div className="titleLineBox">
          <img alt="" className="titleLine" src="img/index/line.png" />
        </div>

        <Form
          action="/register"
          className="mb-5"
          method="post"
          onSubmit={handleSubmit}
        >
          <Form.Group as={Row} className="mb-3" controlId="email">
            <Form.Label column sm="4" className="bold">
              電子信箱
            </Form.Label>
            <Col sm="8">
              <Form.Control
                name="email"
                type="email"
                placeholder="請輸入email"
                className="input"
                onChange={handleChange}
                required
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="account">
            <Form.Label column sm="4" className="bold">
              會員帳號
            </Form.Label>
            <Col sm="8">
              <Form.Control
                name="account"
                type="text"
                placeholder="請輸入會員帳號"
                className="input"
                onChange={handleChange}
                required
                minlength="6"
                maxlength="20"
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="password">
            <Form.Label column sm="4" className="bold">
              密碼
            </Form.Label>
            <Col sm="8">
              <Form.Control
                name="password"
                type="password"
                placeholder="請輸入密碼"
                className="input"
                onChange={handleChange}
                required
                minlength="8"
                maxlength="20"
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="rePassword">
            <Form.Label column sm="4" className="bold">
              再次確認密碼
            </Form.Label>
            <Col sm="8">
              <Form.Control
                name="rePassword"
                type="password"
                placeholder="再次確認密碼"
                className="input"
                onChange={handleChange}
                required
                minlength="8"
                maxlength="20"
              />
            </Col>
          </Form.Group>
          <Form.Group
            className="mb-3 bold mt-5 ms-5"
            controlId="formBasicRCheckBox"
          >
            <Form.Check
              className="lineHeight"
              type="CheckBox"
              label="我了解網站資訊並同意相關服務條款"
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="mt-5 button">
            註冊
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Register;
