/* eslint-disable array-callback-return */
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Container,
  Navbar,
  Nav,
  Form,
  FormControl,
  Image,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faQuestionCircle,
  faShoppingCart,
  faUserCircle,
} from "@fortawesome//free-solid-svg-icons";
import "./Navbar.css";

function TopNavbar(props) {
  const [select, setSelect] = useState();

  const navbarItem = [
    {
      title: "首頁",
      href: "/",
      isShow: false,

    },
    {
      title: "活動",
      href: "/contest",
      secondItem1: "活動資訊",
      secondItem2: "投票活動",
      url1: "/contestInfo",
      url2: "/vote",
      isShow: true,
    },
    {
      title: "租賃服務",
      href: "/booking",
      isShow: false,
    },
    {
      title: "產品頁面",
      href: "/Product",
      isShow: false,
    },
    {
      title: "討論區",
      href: "/discuss",
      isShow: false,
    },
    {
      title: "客服中心",
      href: "/faq",
      secondItem1: "常見問題",
      secondItem2: "即時問答",
      secondItem3: "客服留言",
      url1: "/faq",
      url2: "/instant_QA",
      url3: "#action3",
      isShow: true,
      isNull: true,
    },
  ];

  return (
    <Container fluid>
      <Navbar expand="lg" variant="light" bg="">
        <Navbar.Brand href="/">
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
                  href={v.href}
                  className={`${clsname} navSelect me-1`}
                  title={v.title}
                  id="navbarScrollingDropdown"
                  onMouseEnter={(e) => {
                    setSelect(v.title);
                  }}
                  onMouseLeave={(e) => {
                    if (displayDiv !== "block") {
                      setSelect("");
                    }
                  }}
                >
                  <div className="d-flex justify-content-between align-items-center">
                    {v.title}
                  </div>
                </a>

                {v.isShow === true && (
                  <div
                    className={`${displayDiv} secondLink`}
                    onMouseEnter={(e) => {
                      setSelect(v.title);
                    }}
                    onMouseLeave={(e) => {
                      setSelect("");
                    }}
                  >
                    <a href={`${v.url1}`}>{v.secondItem1}</a>
                    <a href={`${v.url2}`}>{v.secondItem2}</a>
                    {v.isNull === true && (
                      <a href={`${v.url3}`}>{v.secondItem3}</a>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </Nav>
        <div className="me-2">
          <div className="mb-3 TopRightLink">
            <a className="ms-2 me-3" href="#/">
              <FontAwesomeIcon icon={faShoppingCart} />
              購物車
            </a>
            <a href="/memberCenter">
              <FontAwesomeIcon icon={faUserCircle} />
              會員中心
            </a>
          </div>
          <a
            href="/login"
            className="d-flex justify-content-between align-items-center memberBorder"
          >
            <p className="name me-2">王大明</p>
            <div className="d-flex align-items-center">
              點數<div className="point me-1">P</div>: 100
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
