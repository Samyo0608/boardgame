import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Image, Form, Row, Col } from "react-bootstrap";
import "../../css/register.css";

function Register(props) {
  const [yellow, setYellow] = useState("");
  const [yellow2, setYellow2] = useState("");
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
        <Form className="mb-5" method="post">
          <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
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
                className={`${yellow} input`}
                onChange={(e) => {
                  if (e.target.value.length > 0) {
                    setYellow("yellow");
                  } else {
                    setYellow("");
                  }
                }}
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
                className={`${yellow2} input`}
                onChange={(e) => {
                  if (e.target.value.length > 0) {
                    setYellow2("yellow");
                  } else {
                    setYellow2("");
                  }
                }}
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
