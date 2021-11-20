import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, Row, Col } from "react-bootstrap";
import "../../css/login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome//free-solid-svg-icons";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../configs/config";
import Swal from "sweetalert2";

function Login(props) {
  // useState 帳號密碼存放
  const [member, setMember] = useState({
    email: "",
    password: "",
  });

  // 輸入的資料帶入useState
  const handleChange = (e) => {
    let newMember = { ...member };
    newMember[e.target.name] = e.target.value;
    setMember(newMember);
  };

  // sweetAlert2 toast
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 2000,
    onOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  // 前端先比對資料，再由後端比對資料again
  async function handleSubmit(e) {
    e.preventDefault();
    if (member.email !== "" && member.password !== "") {
      try {
        let req = await axios.post(`${API_URL}/auth/login`, member, {
          withCredentials: true,
        });
        if (req.data.code === "104") {
          Toast.fire({
            icon: "error",
            title: "帳號或密碼錯誤！",
          });
        } else {
          Swal.fire({
            icon: "success",
            title: "登入成功",
            text: "登入成功，回首頁",
          }).then((res) => {
            window.location.replace("/");
          });
        }
      } catch (e) {
        console.error("登入錯誤", e);
        Toast.fire({
          icon: "error",
          title: "登入失敗",
        });
      }
    } else {
      Toast.fire({
        icon: "info",
        title: "請輸入email或密碼",
      });
    }
  }

  return (
    <div className="login">
      <img
        alt=""
        src="../../img/booking/booking_index.jpg"
        className="backgroundImageLogin"
      />
      <div className="d-flex flex-column CenterDivLogin justify-content-around align-items-center">
        <p className="h2 mt-5 bold">會員登入</p>
        <div className="titleLineBox">
          <img alt="" className="titleLine" src="/img/index/line.png" />
        </div>
        <Form method="post" action="/login" onSubmit={handleSubmit}>
          <Form.Group as={Row} className="mb-4" controlId="email">
            <Form.Label column sm="4" className="bold">
              電子信箱
            </Form.Label>
            <Col sm="8">
              <Form.Control
                name="email"
                type="email"
                placeholder="請輸入email"
                className="input"
                required
                value={member.email}
                onChange={handleChange}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-5" controlId="password">
            <Form.Label column sm="4" className="bold">
              密碼
            </Form.Label>
            <Col sm="8">
              <Form.Control
                name="password"
                type="password"
                placeholder="請輸入密碼"
                required
                minlength="8"
                maxlength="20"
                className="input"
                value={member.password}
                onChange={handleChange}
              />
            </Col>
          </Form.Group>
          <Form.Group className="mb-5 forget">
            <Link to="/login" className="forgetA">
              <FontAwesomeIcon icon={faExclamationCircle} />
              忘記密碼
            </Link>
          </Form.Group>
          <Button variant="primary" type="submit" className="mt-3 button">
            登入
          </Button>
        </Form>
        <hr className="hrLogin" />
        <Link to="/register" className="decNone">
          <Button variant="primary" className="mb-5 button">
            免費註冊新會員
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Login;
