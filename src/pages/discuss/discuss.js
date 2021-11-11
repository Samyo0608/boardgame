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

const Discuss = () => {
  return (
    <div className="overflow-hidden">
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
      <div className="r_discussBox">
        <div className="r_discussPicBox">
          <img alt="" className="rentPic" src="/img/discuss/r_discuss.png" />
        </div>
        <ul className="list-unstyled pt-4 d-flex justify-content-evenly">
          {gameType.map((v, i) => {
            return (
              <li key={v.id} className="">
                <a
                  href="#/"
                  className="d-inline-block recommendType text-decoration-none text-center"
                >
                  {v.name}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="r_discussOutBox">
          <div className="r_discussInBox pt-2">
            {/* 最新討論 */}
            <div className="discussNew position-relative">
              <table className="table table-hover text-center fw-bold">
                <thead>
                  <tr className="text-secondary">
                    <th scope="col">標題</th>
                    <th scope="col">發文者</th>
                    <th scope="col">讚數</th>
                    <th scope="col">回覆數</th>
                    <th scope="col">最後回覆時間</th>
                  </tr>
                </thead>
                <tbody className="r_discussBody">
                  {discuss.map((v, i) => {
                    return (
                      <tr key={v.discuss_id}>
                        <th scope="row" className="text-start">
                          <Link to={`discuss/reply/${v.discuss_title}`}>
                            {v.discuss_title}
                          </Link>
                        </th>
                        <td>{v.user_id}</td>
                        <td>2</td>
                        <td>{v.discuss_num}</td>
                        <td>
                          {moment(v.discuss_time.toString()).format(
                            "YYYY-MM-DD HH:mm:ss"
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <a className="r_discussButton text-center" href="#/">
              開新話題
            </a>
          </div>
          <div></div>
        </div>
      </div>

      {/* 熱門推薦標題 */}

      <div className="position-relative r_discussTitle">
        <h2 className="text-center">熱門推薦</h2>
        <div className="titleLineBox">
          <img alt="" className="titleLine" src="img/index/line.png" />
        </div>
      </div>

      <div className="discussRecommendBoxOut">
        <div className="discussRecommendBoxIn row">
          <div className="col d-flex drBox">
            <div className="drImgBox">
              <img
                className="drImg"
                alt=""
                src="img/discuss/discussRecommend1.png"
              />
            </div>
            <div className="drTextBox">
              <p className="fw-bold">【卡牌】有人能幫忙看一下牌組嗎?</p>
              <a href="#/">繼續閱讀...</a>
              <p className="mt-3 text-secondary">15個人說讚</p>
            </div>
          </div>
          <div className="col d-flex drBox">
            <div className="drImgBox">
              <img
                className="drImg"
                alt=""
                src="img/discuss/discussRecommend1.png"
              />
            </div>
            <div className="drTextBox">
              <p className="fw-bold">【卡牌】有人能幫忙看一下牌組嗎?</p>
              <a href="#/">繼續閱讀...</a>
              <p className="mt-3 text-secondary">15個人說讚</p>
            </div>
          </div>
        </div>
      </div>

      {/* 討論區規定標題 */}

      <div className="position-relative r_discussTitle">
        <h2 className="text-center">討論區規定</h2>
        <div className="titleLineBox">
          <img alt="" className="titleLine" src="img/index/line.png" />
        </div>
      </div>

      <div className="ruleBoxOut">
        <div className="ruleBoxIn fw-bold">
          <div className="ms-5 pt-5">
            <p>1.不作人身攻擊、謾罵</p>
            <p>2.用字遣詞要注意，友善交流</p>
            <p>3.請勿洗版</p>
            <p>4.有問題請與管理員聯繫</p>
          </div>
          <div className="ruleImgBox">
            <img className="ruleImg" alt="" src="img/discuss/rule.png" />
          </div>
        </div>
      </div>
      {/* 尾巴 */}
    </div>
  );
};

export default Discuss;
