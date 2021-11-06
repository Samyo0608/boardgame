import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import "../../css/memberProduct.css";
import Sidebar from "../../components/memberSidebar/index";

function MemberProduct(props) {
  return (
    <div className="mt-5">
      <div className="d-flex">
        <div className="ms-4 me-4 sidebarRange">
          <Sidebar />
        </div>
        <div className="rightDetail d-flex flex-column justify-content-start align-items-center"></div>
      </div>
    </div>
  );
}

export default MemberProduct;
