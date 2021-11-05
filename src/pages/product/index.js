import React from 'react'
import PropTypes from 'prop-types'
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

import "../../css/product.css";


function Product(props) {
    return (
<>
<>
        <ul className="d-flex  justify-content-evenly list-unstyled py-0 my-2">
       
          <li>
            <a className="gametype" href="#/">
            {/* <img className="typeImg" src={all} alt=""/> */}
              全部
            </a>
          </li>
          <li>
            <a className="gametype" href="#/">
            {/* <img className="typeImg" src={strategy} alt=""/> */}
              策略             
            </a>
          </li>
          <li>        
            <a className="gametype" href="#/">
            {/* <img className="typeImg" src={card} alt=""/> */}
              卡牌
            </a>
          </li>
          <li>
            <a className="gametype" href="#/">
            {/* <img className="typeImg" src={family} alt=""/> */}
              家庭
            </a>
          </li>
        </ul>      
        <hr className="hr1"></hr>
       {/* 第一名遊戲 */}
        <div className="shadowbox" >
        <p className="p1">島嶼爭霸</p>
        <img className="abc" src={process.env.PUBLIC_URL + "/img/product/game1.jpg"} />
   <p className="p2">在群島爭霸中，我們可妥善運用神明賜予的力量，還有
神獸來扭轉戰局，精美的插圖與符合神話故事中的能力，使
群島爭霸非常有在玩希臘神話遊戲
</p>
<span>$999</span>
<a href="#/">
<img className="favorite" src={process.env.PUBLIC_URL + "/img/product/favorite.png"} />
</a>
<a href="#/">
<img className="buy" src={process.env.PUBLIC_URL + "/img/product/buy.png"} />
</a>
</div>
{/* 第二名 */}
  <div className="shadowbox2" >
  <p className="p1">島嶼爭霸</p>
  <img className="abcd" src={process.env.PUBLIC_URL + "/img/product/game1.jpg"} />
   <p className="p3">在群島爭霸中，我們可妥善運用神明賜予的力量，還有
神獸來扭轉戰局，精美的插圖與符合神話故事中的能力，使
群島爭霸非常有在玩希臘神話遊戲
</p>
<span>$999</span>
<a href="#/">
<img className="favorite2" src={process.env.PUBLIC_URL + "/img/product/favorite.png"} />
</a>
<a href="#/">
<img className="buy2" src={process.env.PUBLIC_URL + "/img/product/buy.png"} />
  </a>
  </div>
  {/* 第三名 */}
  <div className="shadowbox3" >
  <p className="p1">島嶼爭霸</p>
  <img className="abcde" src={process.env.PUBLIC_URL + "/img/product/game1.jpg"} />
   <p className="p3">在群島爭霸中，我們可妥善運用神明賜予的力量，還有
神獸來扭轉戰局，精美的插圖與符合神話故事中的能力，使
群島爭霸非常有在玩希臘神話遊戲
</p>
<span>$999</span>
<a href="#/">
<img className="favorite2" src={process.env.PUBLIC_URL + "/img/product/favorite.png"} />
</a>
<a href="#/">
<img className="buy2" src={process.env.PUBLIC_URL + "/img/product/buy.png"} />
  </a>
  </div>
  <hr  className="hr2"></hr>
  {/* 排序紐 */}
  <div className="button0">
  <Button>價格排序</Button>
  <Button>最高</Button>
<Button>最低</Button>
  </div>
  {/* 一 */}
  <div className="shadowbox4" >   
  <img className="pic" src={process.env.PUBLIC_URL + "/img/product/crime.jpg"} />
<div>
  <p className="type">策略</p>
</div>
<div><p className="gamename">犯人在跳舞</p></div>
<span>$999</span>
<a href="#/">
<img className="favorite3" src={process.env.PUBLIC_URL + "/img/product/favorite2.png"} />
</a>
<a href="#/">
<img className="buy3" src={process.env.PUBLIC_URL + "/img/product/buy2.png"} />
</a>
</div>
 {/* 二 */}
  <div className="shadowbox4" >
  <img className="pic" src={process.env.PUBLIC_URL + "/img/product/crime.jpg"} />
<div>
  <p className="type">策略</p>
</div>
<div><p className="gamename">犯人在跳舞</p></div>
<span>$999</span>
<a href="#/">
<img className="favorite3" src={process.env.PUBLIC_URL + "/img/product/favorite2.png"} />
</a>
<a href="#/">
<img className="buy3" src={process.env.PUBLIC_URL + "/img/product/buy2.png"} />
</a>
</div>
  {/* 三 */}
  <div className="shadowbox5" >   
  <img className="pic" src={process.env.PUBLIC_URL + "/img/product/crime.jpg"} />
<div>
  <p className="type">策略</p>
</div>
<div><p className="gamename">犯人在跳舞</p></div>
<span>$999</span>
<a href="#/">
<img className="favorite3" src={process.env.PUBLIC_URL + "/img/product/favorite2.png"} />
</a>
<a href="#/">
<img className="buy3" src={process.env.PUBLIC_URL + "/img/product/buy2.png"} />
</a>
</div>
{/* 六 */}
  <div className="shadowbox5" >   
  <img className="pic" src={process.env.PUBLIC_URL + "/img/product/crime.jpg"} />
<div>
  <p className="type">策略</p>
</div>
<div><p className="gamename">犯人在跳舞</p></div>
<span>$999</span>
<a href="#/">
<img className="favorite3" src={process.env.PUBLIC_URL + "/img/product/favorite2.png"} />
</a>
<a href="#/">
<img className="buy3" src={process.env.PUBLIC_URL + "/img/product/buy2.png"} />
</a>
  </div>
  {/* 五 */}
  <div className="shadowbox7" >   
  <img className="pic" src={process.env.PUBLIC_URL + "/img/product/crime.jpg"} />
<div>
  <p className="type">策略</p>
</div>
<div><p className="gamename">犯人在跳舞</p></div>
<span>$999</span>
<a href="#/">
<img className="favorite3" src={process.env.PUBLIC_URL + "/img/product/favorite2.png"} />
</a>
<a href="#/">
<img className="buy3" src={process.env.PUBLIC_URL + "/img/product/buy2.png"} />
</a>
</div>
  {/* 四 */}
  <div className="shadowbox8" >   
  <img className="pic" src={process.env.PUBLIC_URL + "/img/product/crime.jpg"} />
<div>
  <p className="type">策略</p>
</div>
<div><p className="gamename">犯人在跳舞</p></div>
<span>$999</span>
<a href="#/">
<img className="favorite3" src={process.env.PUBLIC_URL + "/img/product/favorite2.png"} />
</a>
<a href="#/">
<img className="buy3" src={process.env.PUBLIC_URL + "/img/product/buy2.png"} />
</a>
</div>
  </>

        </>
    );
}






export default Product