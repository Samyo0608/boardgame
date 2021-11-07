import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import "../../css/memSelf.css";
import Sidebar from "../../components/memberSidebar/index";

function MemSelf(props) {
  return (
    <div className="mt-5">
      <div className="d-flex">
        <div className="ms-4 me-4 sidebarRange">
          <Sidebar />
        </div>
        <div className=" rightDetail d-flex flex-column justify-content-start align-items-center">
          <p className="h2 bold titleMargin mt-5">基本資料</p>
          <div className="mb-5 bold d-flex justify-content-between align-items-center changeImg">
            <p>個人頭像</p>
            <img alt="" src="img/memberCenter/memberhead.png" />
            <Button>更換頭像</Button>
          </div>
          <Form className="formSize bold">
            <Form.Group as={Row} className="mb-3" controlId="memId">
              <Form.Label column sm="2">
                會員帳號
              </Form.Label>
              <Col sm="10">
                <p className="mb-0 LHeignt">DaWang2021</p>
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="memName">
              <Form.Label column sm="2">
                會員姓名
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  placeholder="請填寫姓名"
                  defaultValue="王大明"
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextEmail"
            >
              <Form.Label column sm="2">
                Email
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="email"
                  placeholder="請填寫email"
                  defaultValue="DaWang2021@gmail.com"
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="phone">
              <Form.Label column sm="2">
                手機號碼
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  placeholder="請填寫手機號碼"
                  defaultValue="0912345678"
                />
              </Col>
            </Form.Group>
            <div className="mb-3">
              <Form.Group className="mb-3" controlId="gender">
                <Form.Label column sm="2">
                  性別
                </Form.Label>
                <Form.Check
                  inline
                  label="男"
                  name="gender"
                  type="radio"
                  id=""
                  checked
                  value="男"
                />
                <Form.Check
                  inline
                  label="女"
                  name="gender"
                  type="radio"
                  id=""
                  value="女"
                />
              </Form.Group>
              <Form.Group>
                <Row className="mb-3">
                  <Form.Label column sm="2">
                    生日
                  </Form.Label>
                  <Form.Group
                    controlId="year"
                    className="col-3 d-flex align-items-center"
                  >
                    <Form.Select defaultValue="1996" className="me-2">
                      <option value="1996">1996</option>
                      <option value="1995">1995</option>
                      <option value="1994">1994</option>
                      <option value="1993">1993</option>
                      <option value="1992">1992</option>
                    </Form.Select>
                    <Form.Label>年</Form.Label>
                  </Form.Group>

                  <Form.Group
                    controlId="month"
                    className="col-3 d-flex align-items-center"
                  >
                    <Form.Select defaultValue="1" className="me-2">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </Form.Select>
                    <Form.Label>月</Form.Label>
                  </Form.Group>

                  <Form.Group
                    controlId="day"
                    className="col-3 d-flex align-items-center"
                  >
                    <Form.Select defaultValue="1" className="me-2">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </Form.Select>
                    <Form.Label>日</Form.Label>
                  </Form.Group>
                </Row>
              </Form.Group>
              <Form.Group>
                <Row className="mb-3">
                  <Form.Label column sm="2">
                    地址
                  </Form.Label>
                  <Form.Group
                    controlId="city"
                    className="col-2 d-flex align-items-center"
                  >
                    <Form.Select defaultValue="桃園市">
                      <option value="台北市">台北市</option>
                      <option value="新北市">新北市</option>
                      <option value="桃園市">桃園市</option>
                      <option value="新竹縣">新竹縣</option>
                      <option value="新竹市">新竹市</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group
                    controlId="district"
                    className="col-2 d-flex align-items-center"
                  >
                    <Form.Select defaultValue="中壢區">
                      <option value="中壢區">中壢區</option>
                      <option value="楊梅區">楊梅區</option>
                      <option value="桃園區">桃園區</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group
                    controlId="address"
                    className="col-6 d-flex align-items-center"
                  >
                    <Form.Control type="text" placeholder="剩餘完整地址" />
                  </Form.Group>
                </Row>
              </Form.Group>
            </div>
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
  );
}

export default MemSelf;
