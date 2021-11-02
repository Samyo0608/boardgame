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
import { faSearch } from "@fortawesome//free-solid-svg-icons";
import "./Navbar.css";

function TopNavbar(props) {
  const [select, setSelect] = useState();

  const navbarItem = [
    {
      title: "首頁",
      secondItem1: "最新消息",
      secondItem2: "門市資訊",
      url1: "#action1",
      url2: "#action2",
    },
    {
      title: "租賃服務",
      secondItem1: "最新消息",
      secondItem2: "門市資訊",
      url1: "#action1",
      url2: "#action2",
    },
    {
      title: "產品頁面",
      secondItem1: "最新消息",
      secondItem2: "門市資訊",
      url1: "#action1",
      url2: "#action2",
    },
    {
      title: "討論區",
      secondItem1: "最新消息",
      secondItem2: "門市資訊",
      url1: "#action1",
      url2: "#action2",
    },
    {
      title: "客服中心",
      secondItem1: "最新消息",
      secondItem2: "門市資訊",
      url1: "#action1",
      url2: "#action2",
    },
  ];

  const details = (navbarItem) => {
    const state = [];
    for (let i = 0; i < navbarItem.length; i++) {
      state.push({ ...navbarItem[i], show: false });
    }
    return state;
  };
  return (
    <Container>
      <Navbar expand="lg" variant="light" bg="light">
        <Container fluid>
          <Navbar.Brand href="#">
            <Image src="../../img/LOGO.png" style={{ maxWidth: "180px" }} />
          </Navbar.Brand>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            {navbarItem.map((v, i) => {
              return (
                <div
                  key={i}
                  className={v.title === select ? "active" : ""}
                  title={v.title}
                  id="navbarScrollingDropdown"
                  onMouseEnter={() => {
                    setSelect(v.title);
                  }}
                  onMouseLeave={() => {
                    setSelect("");
                  }}
                >
                  <a href="#/" className="me-5 titleLink">
                    {v.title}
                  </a>
                </div>
              );
            })}{" "}
          </Nav>
        </Container>
      </Navbar>
    </Container>
  );
}

export default TopNavbar;
