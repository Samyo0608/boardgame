import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/discuss.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const gameType = [
  { id: 1, name: "全部" },
  { id: 2, name: "家庭" },
  { id: 3, name: "策略" },
  { id: 4, name: "卡牌" },
];

const discuss = () => {
  return (
    <div className="container overflow-hidden">
      {/* banner */}
      <div className="discussBannerBox">
        <img className="discussBannerImg" src="img/discuss/banner.png" alt="" />
        <div className="bannerContent text-end">
          <p className="fs-2">遊戲職人</p>
          <p className="fs-5">討論區</p>
        </div>
      </div>

      {/* 麵包屑 */}
      <div className="discussBread text-end">
        <a className="discussBreadContent" href="#/">
          首頁{`>>`}討論區
        </a>
      </div>
      {/* 討論區內容 */}

      {/* 尾巴 */}
    </div>
  );
};

export default discuss;
