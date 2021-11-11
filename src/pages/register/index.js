import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Image, Form, Row, Col } from "react-bootstrap";
import "../../css/register.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome//free-solid-svg-icons";
import { API_URL } from "../../configs/config";
import axios from "axios";

function Register(props) {
  const [member, setMember] = useState({
    email: "",
    password: "",
    rePassword: "",
  });

  // function handleSubmit(e) {
  //   alert("成功");
  // }

  async function handleSubmit(e) {
    //e.preventDefault() -> 取消DOM的預設功能
    e.preventDefault();
    if (member.password === member.rePassword && member.email !== "") {
      try {
        await axios.post(`${API_URL}/auth/register`, member, {
          // res cors -> cookie
          withCredentials: true,
        });
        alert("註冊成功");
        props.history.push("/");
      } catch (e) {
        console.log("handleSubmit", e);
        alert("註冊失敗");
      }
    } else if (member.password !== member.rePassword) {
      alert("密碼驗證失敗");
    } else {
      alert("信箱未填寫");
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
                type="email"
                placeholder="請輸入email"
                className="input"
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="">
            <Form.Label column sm="4" className="bold">
              使用者帳號
            </Form.Label>
            <Col sm="8">
              <Form.Control
                type="text"
                placeholder="請輸入帳號"
                className="input"
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formBasicPassword">
            <Form.Label column sm="4" className="bold">
              密碼
            </Form.Label>
            <Col sm="8">
              <Form.Control
                type="password"
                placeholder="請輸入密碼"
                className="input"
                onChange={handleChange}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formBasicRePassword">
            <Form.Label column sm="4" className="bold">
              再次確認密碼
            </Form.Label>
            <Col sm="8">
              <Form.Control
                type="password"
                placeholder="再次確認密碼"
                className="input"
                onChange={handleChange}
              />
            </Col>
          </Form.Group>
          <Form.Group
            className="mb-3 bold mt-5 ms-5"
            controlId="formBasicRCheckBox"
          >
            <Form.Check
              type="CheckBox"
              label="我了解網站資訊並同意相關服務條款"
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="mt-5 button">
            登入
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Register;
