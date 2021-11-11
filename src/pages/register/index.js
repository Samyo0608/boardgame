/* eslint-disable no-unused-expressions */
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Image, Form, Row, Col } from "react-bootstrap";
import "../../css/register.css";
import axios from "axios";
import { API_URL } from "../../configs/config";

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
    e.preventDefault();
    try {
      alert("成功");
      // let res = await axios.post(`${API_URL}/auth/register`, member, {
      //   // 因為會讓 res cors 寫 cookie
      //   withCredentials: true,
      // });
      await axios.post(`${API_URL}/auth/register`, member, {
        // 因為會讓 res cors 寫 cookie
        withCredentials: true,
      });
    } catch (e) {
      console.log("handleSubmit", e);
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
          <img alt="" className="titleLine" src="/img/index/line.png" />
        </div>

        <Form className="mb-5" method="post" onSubmit={handleSubmit}>
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
                required
                value={member.email}
                onChange={handleChange}
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
                minlength="8"
                maxlength="20"
                required
                value={member.password}
                className="input"
                onChange={handleChange}
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
                minlength="8"
                maxlength="20"
                required
                value={member.rePassword}
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
              name="ness"
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
