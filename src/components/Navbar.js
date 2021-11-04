/* eslint-disable array-callback-return */
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Image,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faSortDown,
  faQuestionCircle,
  faShoppingCart,
  faUserCircle,
} from "@fortawesome//free-solid-svg-icons";
import "./Navbar.css";

function TopNavbar(props) {
  const [select, setSelect] = useState();
  const [display, setDisplay] = useState("d-none");

  const navbarItem = [
    {
      title: "首頁",
      secondItem1: "最新消息",
      secondItem2: "門市資訊",
      url1: "#action1",
      url2: "#action2",
    },
    {
      title: "活動",
      secondItem1: "活動資訊",
      secondItem2: "投票活動",
      url1: "#action1",
      url2: "#action2",
    },
    {
      title: "租賃服務",
    },
    {
      title: "產品頁面",
    },
    {
      title: "討論區",
    },
    {
      title: "客服中心",
      secondItem1: "常見問題",
      secondItem2: "即時問答",
      secondItem3: "客服留言",
      url1: "#action1",
      url2: "#action2",
      url3: "#action3",
    },
  ];

  return (
    <Container fluid>
      <Navbar expand="lg" variant="light" bg="">
        <Navbar.Brand href="#">
          <Image src="../../img/LOGO.png" style={{ maxWidth: "180px" }} />
        </Navbar.Brand>
        <Form className="d-flex searchInput">
          <FormControl
            type="search"
            placeholder="找遊戲"
            className="me-2 formControl"
            aria-label="Search"
          />
          <Button variant="link" className="faSearch">
            <div>
              <FontAwesomeIcon icon={faSearch} />
            </div>
          </Button>
        </Form>
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: "100px" }}
          navbarScroll
        >
          {navbarItem.map((v, i) => {
            const clsname = v.title === select ? "active" : "";
            const displayDiv = v.title === select ? "d-block" : "d-none";
            return (
              <div className="d-flex flex-column align-items-center">
                <a
                  key={i}
                  href="#/"
                  className={`${clsname} navSelect me-1`}
                  title={v.title}
                  id="navbarScrollingDropdown"
                  display={v.display}
                  onMouseEnter={(e) => {
                    setSelect(v.title);
                  }}
                  onMouseLeave={(e) => {
                    setSelect("");
                  }}
                >
                  <div className="d-flex justify-content-between align-items-center">
                    {v.title}
                  </div>
                </a>

                <div
                  className={`${displayDiv} secondLink`}
                  onMouseEnter={(e) => {
                    setSelect(v.title);
                    setDisplay("block");
                  }}
                  onMouseLeave={(e) => {
                    setSelect("");
                    setDisplay("d-none");
                  }}
                >
                  <a href={`${v.url1}`}>{v.secondItem1}</a>
                  <a href={`${v.url2}`}>{v.secondItem2}</a>
                  <a href={`${v.url3}`}>{v.secondItem3}</a>
                </div>
              </div>
            );
          })}
        </Nav>
        <div className="me-2">
          <div className="mb-3 ms-3 TopRightLink">
            <a className="ms-2 me-3" href="#/">
              <FontAwesomeIcon icon={faShoppingCart} />
              購物車
            </a>
            <a href="#/">
              {" "}
              <FontAwesomeIcon icon={faUserCircle} />
              會員中心
            </a>
          </div>
          <a
            href="#/"
            className="d-flex justify-content-between align-items-center memberBorder"
          >
            <p className="name me-2">王大明</p>
            <div className="d-flex align-items-center">
              點數<div className="point">P</div> :100
            </div>
            <div className="ms-1">
              <FontAwesomeIcon
                icon={faQuestionCircle}
                className="faQuestionCircle"
              />
            </div>
          </a>
        </div>
      </Navbar>
    </Container>
  );
}

export default TopNavbar;
