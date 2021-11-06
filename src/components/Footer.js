import React from "react";
import "../css/Footer.css";
function Footer(props) {
  return (
    <div className="footer">
      <div className="footerWidth">
        {/* foot navbar */}
        <ul className="d-flex  justify-content-evenly list-unstyled py-3 my-0">
          <li>
            <a className="footerList" href="#/">
              首頁
            </a>
          </li>
          <li>
            <a className="footerList" href="#/">
              活動
            </a>
          </li>
          <li>
            <a className="footerList" href="#/">
              租賃服務
            </a>
          </li>
          <li>
            <a className="footerList" href="#/">
              產品頁面
            </a>
          </li>
          <li>
            <a className="footerList" href="#/discuss">
              討論區
            </a>
          </li>
          <li>
            <a className="footerList" href="#/">
              客服中心
            </a>
          </li>
        </ul>
        {/* 白色底線 */}
        <div className="footerLine"></div>
        {/* footer LOGO+文字 */}
        <div className="d-flex mt-2 mx-5 justify-content-evenly align-items-center">
          <img className="footImg mx-5" src="img/LOGO.png" alt="" />
          <p className="footerText text-center  mb-0">
            此網站為專題發表成果用，如有侵權請立即告知，會立即刪除相關資訊
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
