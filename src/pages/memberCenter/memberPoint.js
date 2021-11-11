import React from "react";
import Sidebar from "../../components/memberSidebar/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome//free-solid-svg-icons";
import MemPoint from "../../components/memPoint/memPoint";

// 假資料
const Detail = [
  {
    url: "/img/booking/sixRoom.jpg",
    type: "六人房",
    price: "200",
    date: "2021/09/15",
    point: "4",
  },
  {
    url: "/img/index/game5.jpg",
    type: "說書人",
    price: "900",
    date: "2021/09/14",
    point: "18",
  },
  {
    url: "/img/memberCenter/boardgame02.png",
    type: "四季物語",
    price: "300",
    date: "2021/08/05",
    point: "6",
  },
];

function MemberPoint(props) {
  return (
    <div className="mt-5">
      <div className="d-flex">
        <div className="ms-4 me-4 sidebarRange">
          <Sidebar />
        </div>
        <div className="rightDetail d-flex flex-column justify-content-start align-items-center">
          <p className="h2 mt-5 bold">點數明細</p>

          {/* 頂端點數總和 start */}
          <div className="object-pro d-flex justify-content-center mt-3 mb-5">
            <p className="h2 bold text-main me-2 pointLineHeight">目前點數</p>
            <div className="d-flex justify-content-center align-items-center">
              <div className="me-1 bold point point-mem h4">P</div>
              <span className="h1 text-main me-5 bold">78</span>
            </div>
          </div>
          {/* 頂端點數總和 end */}
          {Detail.map((v, i) => {
            return (
              <MemPoint
                key={i}
                pointImg={v.url}
                pointType={v.type}
                pointPrice={v.price}
                pointDate={v.date}
                point={v.point}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MemberPoint;
