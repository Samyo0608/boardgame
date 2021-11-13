import React, { useState } from "react";
import "./memberSidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faUser,
  faKey,
  faChessBoard,
  faEthernet,
} from "@fortawesome//free-solid-svg-icons";
import { NavLink } from "react-router-dom";

function Sidebar(props) {
  const [open1, setOpen1] = useState("sidebarOpen");
  const [open2, setOpen2] = useState("sidebarOpen");
  const [open3, setOpen3] = useState("sidebarOpen");
  const [transform, setTransform] = useState("sidebarArrowRotateOpen");
  const [transform2, setTransform2] = useState("sidebarArrowRotateOpen");
  const [transform3, setTransform3] = useState("sidebarArrowRotateOpen");
  return (
    <div className="sidebar mt-5">
      <NavLink
        to="/memberCenter"
        className="h3 d-flex justify-content-between align-items-center centerLink bold"
        exact
      >
        <p>會員中心</p>
      </NavLink>
      <hr />
      <div
        href="#/memberCenter/memSelf"
        className="h3 d-flex justify-content-between"
        onClick={(e) => {
          setOpen1(open1 === "sidebarClose" ? "sidebarOpen" : "sidebarClose");
          setTransform(
            transform === "sidebarArrowRotateOpen"
              ? "sidebarArrowRotateClose"
              : "sidebarArrowRotateOpen"
          );
        }}
      >
        <span>個人資料</span>
        <FontAwesomeIcon
          icon={faChevronRight}
          className={`${transform} arrowSize`}
        />
      </div>
      <ul className={`${open1} mt-4 ps-0 row`}>
        <li className="col-12">
          <NavLink to="/memberCenter/memSelf" activeClassName="linkSelected">
            <div className="ms-6">
              <FontAwesomeIcon icon={faUser} className="me-1" />
              基本資料
            </div>
          </NavLink>
        </li>
        <li className="col-12">
          <NavLink to="/memberCenter/rePassword" activeClassName="linkSelected">
            <div className="ms-6">
              <FontAwesomeIcon icon={faKey} className="me-1" />
              密碼修改
            </div>
          </NavLink>
        </li>
      </ul>
      <hr />
      <div
        href="#/"
        className="h3 d-flex justify-content-between"
        onClick={(e) => {
          setOpen2(open2 === "sidebarClose" ? "sidebarOpen" : "sidebarClose");
          setTransform2(
            transform2 === "sidebarArrowRotateOpen"
              ? "sidebarArrowRotateClose"
              : "sidebarArrowRotateOpen"
          );
        }}
      >
        <span>消費紀錄</span>
        <FontAwesomeIcon
          icon={faChevronRight}
          className={`${transform2} arrowSize`}
        />
      </div>
      <ul className={`${open2} mt-4 ps-0 d-flex flex-column`}>
        <li>
          <NavLink
            to="/memberCenter/memberProduct"
            activeClassName="linkSelected"
          >
            <div className="ms-6">
              <FontAwesomeIcon icon={faChessBoard} className="me-1" />
              桌遊購買
            </div>
          </NavLink>
        </li>
        <li className="">
          <NavLink to="/memberCenter/memberRent" activeClassName="linkSelected">
            <div className="ms-6">
              <FontAwesomeIcon icon={faEthernet} className="me-1" />
              場地租賃
            </div>
          </NavLink>
        </li>
      </ul>
      <hr />
      <div
        href="#/"
        className="h3 d-flex justify-content-between"
        onClick={(e) => {
          setOpen3(open3 === "sidebarClose" ? "sidebarOpen" : "sidebarClose");
          setTransform3(
            transform3 === "sidebarArrowRotateOpen"
              ? "sidebarArrowRotateClose"
              : "sidebarArrowRotateOpen"
          );
        }}
      >
        <span>點數明細</span>
        <FontAwesomeIcon
          icon={faChevronRight}
          className={`${transform3} arrowSize`}
        />
      </div>
      <ul className={`${open3} mt-4 ps-0`}>
        <li>
          <NavLink
            to="/memberCenter/memberPoint"
            activeClassName="linkSelected"
            className="pointDivSide"
          >
            <div className="ms-6 d-flex align-items-center">
              <div className="bold point point-sidebar me-1">P</div>
              <span>點數明細</span>
            </div>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
