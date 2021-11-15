/* eslint-disable array-callback-return */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
  faSignOutAlt,
} from "@fortawesome//free-solid-svg-icons";
import "./Navbar.css";
import axios from "axios";
import { API_URL } from "../configs/config";

function TopNavbar(props) {
  const [select, setSelect] = useState();
  const [sessionMember, setSessionMember] = useState({
    id: "",
    email: "",
    account: "",
    point: "",
  });
  useEffect((e) => {
    async function session() {
      try {
        let memberSession = await axios.get(`${API_URL}/session/member`, {
          withCredentials: true,
        });
        setSessionMember(memberSession.data);
      } catch (e) {
        alert("獲取資料失敗");
      }
    }
    session();
  }, []);

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.get(`${API_URL}/auth/logout`, {
        withCredentials: true,
      });
      alert("登出成功");
      window.location.replace("/");
    } catch (e) {
      console.error(e);
      alert("登出失敗");
    }
  };

  const centerClick = () => {
    if (!sessionMember.id) {
      alert("請先登入");
    }
  };

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
      url1: "/contestInfo/1",
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
      url3: "/question_record",
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
                <Link
                  key={i}
                  to={v.href}
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
                </Link>

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
                    <Link to={`${v.url1}`}>{v.secondItem1}</Link>
                    <Link to={`${v.url2}`}>{v.secondItem2}</Link>
                    {v.isNull === true && (
                      <Link to={`${v.url3}`}>{v.secondItem3}</Link>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </Nav>
        <div className="me-2">
          <div className="mb-3 TopRightLink">
            <Link className="ms-2 me-3" to="/Cart">
              <FontAwesomeIcon icon={faShoppingCart} />
              購物車
            </Link>
            <Link
              className="ms-2 me-3"
              to={sessionMember.id ? "/memberCenter" : "/login"}
              onClick={centerClick}
            >
              <FontAwesomeIcon icon={faUserCircle} />
              會員中心
            </Link>
            {sessionMember.id && (
              <a href="/" onClick={handleClick}>
                <FontAwesomeIcon icon={faSignOutAlt} />
                登出
              </a>
            )}
          </div>
          {sessionMember.id ? (
            <Link
              to="/memberCenter/memberPoint"
              className="d-flex justify-content-around align-items-center memberBorder"
            >
              <p className="name">
                {sessionMember.account
                  ? sessionMember.account
                  : `會員${sessionMember.id}`}
              </p>
              <div className="d-flex align-items-center">
                點數<div className="point">P</div> : {sessionMember.point}
              </div>
              <div className="ms-1">
                <FontAwesomeIcon
                  icon={faQuestionCircle}
                  className="faQuestionCircle"
                />
              </div>
            </Link>
          ) : (
            <Link
              to="/login"
              className="d-flex justify-content-center align-items-center memberBorder"
            >
              登入
            </Link>
          )}
        </div>
      </Navbar>
    </Container>
  );
}

export default TopNavbar;
