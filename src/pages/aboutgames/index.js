import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import "../../css/aboutgame.css";
function Aboutgame(props) {
    return (
        <>
        <ul className="d-flex  justify-content-evenly list-unstyled py-0 my-2">     
          <li>
            <a className="gametype" href="#/">
              全部
            </a>
          </li>
          <li>         
            <a className="gametype" href="#/">  
              策略            
            </a>
          </li>
          <li>        
            <a className="gametype" href="#/">       
              卡牌
            </a>
          </li>
          <li>
            <a className="gametype" href="#/">       
              家庭
            </a>
          </li>
        </ul>
        
        <>
        <hr className="hr1"></hr>
        </>
        <div>
        <div className="box" >
        <p className="p6">島嶼爭霸</p>
        <img className="abb" src="/img/product/game1.jpg" alt="" />

      
        <div className="text1">
        <span>類型: 策略</span>
        <p></p>
        <span>簡介: </span>
        <p></p>
        <p>◎ 扮演五個重要的希臘城市，要在諸神的凝視
              下來爭奪霸業。</p>
        <p>◎ 善用金錢取得眾神的信任，執行對應的動作</p>
        <p>遊戲人數：2~5人</p>
        <br></br>
        <p>遊戲年齡：13+</p>
<br></br>
        <p>遊戲時間：60分鐘</p>
        </div>
        <div>
        <a href="#/">
<img className="favorite4" src="/img/product/favorite.png" alt="" />

</a>
<a href="#/">
<img className="buy4" src="/img/product/buy.png" alt="" />
  </a>
  </div>
        </div>
        </div>
  <div className="btn0">
  <Button>遊戲介紹</Button>
  <Button>遊戲規格</Button>
  <Button>退換貨須知</Button>
  </div>
  <div>
        <div className="box2" ></div>
        
<h1 className="p7">遊戲名稱：諸神之戰 Cyclades
</h1>
<a href="#/">
<img className="forum" src="/img/product/forum.png" alt=""/>
</a>
</div>








        </>
    )
}


export default  Aboutgame