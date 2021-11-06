import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import "../../css/rePassword.css";
import Sidebar from "../../components/memberSidebar/index";

function RePassword(props) {
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
            <Form className="bold">
              <Form.Group as={Row} className="mb-3" controlId="oldPassword">
                <Form.Label column sm="4">
                  原密碼
                </Form.Label>
                <Col sm="8">
                  <Form.Control type="password" placeholder="請輸入密碼" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="reOld">
                <Form.Label column sm="4">
                  原密碼確認
                </Form.Label>
                <Col sm="8">
                  <Form.Control type="password" placeholder="密碼確認" />
                </Col>
              </Form.Group>{" "}
              <Form.Group as={Row} className="mb-3" controlId="newPassword">
                <Form.Label column sm="4">
                  新密碼
                </Form.Label>
                <Col sm="8">
                  <Form.Control type="password" placeholder="請輸入新密碼" />
                </Col>
              </Form.Group>{" "}
              <Form.Group as={Row} className="mb-3" controlId="reNew">
                <Form.Label column sm="4">
                  新密碼確認
                </Form.Label>
                <Col sm="8">
                  <Form.Control type="password" placeholder="新密碼確認" />
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
