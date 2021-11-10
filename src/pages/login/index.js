import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, Row, Col } from "react-bootstrap";
import "../../css/login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome//free-solid-svg-icons";

function Login(props) {
  const [yellow, setYellow] = useState("");
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
        <Form method="post">
          <Form.Group as={Row} className="mb-4" controlId="formBasicEmail">
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

          <Form.Group as={Row} className="mb-5" controlId="formBasicPassword">
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
          <Form.Group className="mb-5 forget">
            <a href="#/" className="forgetA">
              <FontAwesomeIcon icon={faExclamationCircle} />
              忘記密碼
            </a>
          </Form.Group>
          <Button variant="primary" type="submit" className="mt-3 button">
            登入
          </Button>
        </Form>
        <hr className="hrLogin" />
        <Button variant="primary" className="mb-5 button" type="submit">
          免費註冊新會員
        </Button>
      </div>
    </div>
  );
}

export default Login;
