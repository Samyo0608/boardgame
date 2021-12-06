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
import Swal from "sweetalert2";

function TopNavbar(props) {
  const [select, setSelect] = useState();
  const [sessionMember, setSessionMember] = useState({
    id: "",
    email: "",
    account: "",
    point: "",
  });
  const [product, setProduct] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [member, setMember] = useState({ point: "" });

  // 初始載入資料
  useEffect((e) => {
    async function session() {
      try {
        let memberSession = await axios.get(`${API_URL}/session/member`, {
          withCredentials: true,
        });
        setSessionMember(memberSession.data);
      } catch (e) {
        // alert("獲取資料失敗");
      }
    }
    session();
  }, []);

  // 抓取會員資料
  useEffect(() => {
    async function getMemberData() {
      let member = await axios.get(
        `${API_URL}/cart/${sessionStorage.getItem("account")}`,
        {
          withCredentials: true,
        }
      );
      setMember(member.data[0]);
    }
    getMemberData();
  }, []);

  // 抓取產品資料
  // useEffect(() => {
  //   async function product() {
  //     try {
  //       let product = await axios.get(`${API_URL}/cart/`, {
  //         withCredentials: true,
  //       });
  //       setProduct(product.data);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   }
  //   product();
  // }, []);

  // console.log(product);

  // logout按鈕事件
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.get(`${API_URL}/auth/logout`, {
        withCredentials: true,
      });
      Swal.fire({
        icon: "success",
        title: "登出成功",
        text: "登出成功，回首頁",
      }).then((res) => {
        window.location.replace("/");
      });
    } catch (e) {
      console.error(e);
      Swal.fire({
        icon: "error",
        title: "登出失敗",
        text: "請聯繫網站管理員",
      });
    }
  };

  const centerClick = () => {
    if (!sessionMember.id) {
      Swal.fire({
        icon: "info",
        title: "請先登入",
        text: "尚未登入呦，請先登入網站再進入會員中心^_^",
        footer: '<a href="/" class="btn btn-light">回首頁</a>',
      }).then((res) => {
        window.location.replace("/login");
      });
    } else {
      window.location.replace(`/memberCenter${sessionMember.account}`);
    }
  };

  const cartClick = () => {
    if (!sessionMember.id) {
      Swal.fire({
        icon: "info",
        title: "請先登入",
        text: "尚未登入呦，請先登入網站再進入購物車",
        footer: '<a href="/" class="btn btn-light">回首頁</a>',
      }).then((res) => {
        window.location.replace("/login");
      });
    } else {
      window.location.replace(`/Cart${sessionMember.account}`);
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
      url3: "/customer_service_message",
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
            type="text"
            placeholder="找遊戲"
            name="search"
            className="me-2 formControl"
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
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
            <a className="ms-2 me-3" href="#/" onClick={cartClick}>
              <FontAwesomeIcon icon={faShoppingCart} />
              購物車
            </a>
            <a className="ms-2 me-3" href="#/" onClick={centerClick}>
              <FontAwesomeIcon icon={faUserCircle} />
              會員中心
            </a>
            {sessionMember.id && (
              <a href="/" onClick={handleClick}>
                <FontAwesomeIcon icon={faSignOutAlt} />
                登出
              </a>
            )}
          </div>
          {sessionMember.id ? (
            <Link
              to={`/memberCenter${sessionMember.account}`}
              className="d-flex justify-content-around align-items-center memberBorder"
            >
              <p className="name">
                {sessionMember.account ? sessionMember.account : "會員您好"}
              </p>
              <div className="d-flex align-items-center">
                點數<div className="point me-1">P</div> :{" "}
                {member ? member.point : sessionMember.point}
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
              登入/註冊
            </Link>
          )}
        </div>
      </Navbar>
    </Container>
  );
}

export default TopNavbar;
