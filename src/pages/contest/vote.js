import {React,useState} from 'react'
import reactDom from 'react-dom';
import PropTypes from 'prop-types'
import "../../css/vote.css";
import "normalize.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Container, Row,Col,} from 'react-bootstrap';
import BarChart from '../../components/contest/BarChart';
import VoteLabel from '../../components/contest/VoteLabel.js'

// 投票票數假資料
const familyVote=[
    {
     id:1,
     game_name:"傳情畫意家庭",
     vote_get:12,
     product_type:"家庭",
    },
    {
     id:2,
     game_name:"估估劃劃家庭",
     vote_get:6,
     product_type:"家庭",
    },
    {
     id:3,
     game_name:"諾亞方舟家庭",
     vote_get:20,
     product_type:"家庭",

    },

]
const tragVote=[
    {
     id:1,
     game_name:"傳情畫意策略",
     vote_get:2
    },
    {
     id:2,
     game_name:"估估劃劃策略",
     vote_get:3,
    },
    {
     id:3,
     game_name:"諾亞方舟策略",
     vote_get:8,
    },

]

const cardVote=[
    {
     id:1,
     game_name:"傳情畫意卡片",
     vote_get:10,
    },
    {
     id:2,
     game_name:"估估劃劃卡片",
     vote_get:12,
    },
    {
     id:3,
     game_name:"諾亞方舟卡片",
     vote_get:2,
    },

]

const allVote=[
    {
     id:1,
     game_name:"傳情畫意全部",
     vote_get:2
    },
    {
     id:2,
     game_name:"估估劃劃全部",
     vote_get:3,
    },
    {
     id:3,
     game_name:"諾亞方舟全部",
     vote_get:8,
    },

]
// 分類按鈕的狀態圖
const categoryButton=[
    {
        id:1,
        status:"全系列",
    },
    {
        id:2,
        status:"家庭系列",
    },
    {
        id:3,
        status:"卡牌系列",
    },
    {
        id:4,
        status:"策略系列",
    }
]

function Vote(props) {
    const[status,setStatus] = useState(2);
    return (
        <>
         {/* 投票活動 */}
        <h2 className="text-center">投票活動</h2>
        <div className="titleLineBox">
            <img alt="" className="titleLine" src="img/index/line.png" />
        </div>
        {/* 投票結果切換按鈕 */}
        <div className="container1">
        <Row>
        {categoryButton.map((v,i) =>{
            return (
                <Col><button className={`viewButton col-3 ${ status === v.id ? "viewButtonActive" : ""}`}
                onClick={(e) => {setStatus(v.id)}}>{v.status}</button>
                </Col>
            )
        })

        }
       </Row>

   {/* 全系列開始 */}


   {/* 投票長條圖及結果開始 */}
   <div className={`voteResult pt-3 ${ status === 1 ? "d-block" : "d-none"}` }>
        <h2 className="text-center">目前投票結果全</h2>
        <div className="titleLineBox">
            <img alt="" className="titleLine" src="img/index/line.png" />
        </div>
        
        <Container >

        {/* 長條圖在這 */}
        
        <BarChart />

        <Row className="d-flex justify-content-center ps-5 ms-4 pt-5">
            <Col md={4} >
                <div className="votePic mt-5">
                <img alt="遊戲圖片" className="voteImg" src='/img/contest/vote/family06_incanGold.jpg' fluid />
                </div>                     
            </Col>
            <Col md={4}>
                <div className="votePic">
                <img alt="遊戲圖片" className="voteImg" src='/img/contest/vote/family08_avalon.jpg' fluid />
                </div>
                     
            </Col>
            <Col md={4}>
                <div className="votePic mt-5">
                <img alt="遊戲圖片" className="voteImg" src='/img/contest/vote/family05_geisters.jpg' fluid />
                </div>
                    
            </Col>
            <Col md={4} ><div className="voteRank mt-5 ms-3">第三名</div> </Col>
            <Col md={4}><div className="voteRank ms-3">第一名</div> </Col>
            <Col md={4}><div className="voteRank mt-5 ms-3">第二名</div></Col>
        </Row>
        </Container>
        
        </div>
         {/* 投票長條圖及結果結束 */}

         
    
    {/* 投票區域開始 */}
    <div className={`voteChoose ${ status === 1 ? "d-block" : "d-none"}`}>
    <div >
        <div>
        <h2 className="text-center pt-3">我也要投票!全</h2>
        <div className="titleLineBox">
            <img alt="" className="titleLine mb-3" src="img/index/line.png" />
        </div>
        </div>
        <div>
            <form action="" className="fs-2 p-2 justify-content-left align-items-center mb-3">

            {allVote.map((v,i) => {
                return(
                <VoteLabel 
                  name={v.game_name} />
                )                    
            })}
            
            
            <input type="submit" value="送  出" className="submitVote m-3" />
            </form>
        </div>
     </div>
</div>



   {/* 家庭系列開始 */}

{/* 投票長條圖及結果開始 */}
<div className={`voteResult pt-3 ${status===2?"d-block":"d-none"}`}>
        <h2 className="text-center">目前投票結果家庭</h2>
        <div className="titleLineBox">
            <img alt="" className="titleLine" src="img/index/line.png" />
        </div>
        
        <Container >

        {/* 長條圖在這 */}
        
        <BarChart/>

        <Row className="d-flex justify-content-center ps-5 ms-4 pt-5">
            <Col md={4} >
                <div className="votePic mt-5">
                <img alt="遊戲圖片" className="voteImg" src='/img/contest/vote/family06_incanGold.jpg' fluid />
                </div>                     
            </Col>
            <Col md={4}>
                <div className="votePic">
                <img alt="遊戲圖片" className="voteImg" src='/img/contest/vote/family08_avalon.jpg' fluid />
                </div>
                     
            </Col>
            <Col md={4}>
                <div className="votePic mt-5">
                <img alt="遊戲圖片" className="voteImg" src='/img/contest/vote/family05_geisters.jpg' fluid />
                </div>
                    
            </Col>
            <Col md={4} ><div className="voteRank mt-5 ms-3">第三名</div> </Col>
            <Col md={4}><div className="voteRank ms-3">第一名</div> </Col>
            <Col md={4}><div className="voteRank mt-5 ms-3">第二名</div></Col>
        </Row>
        </Container>
        
        </div>
         {/* 投票長條圖及結果結束 */}

         <div className={`voteChoose ${status === 2 ? "d-block":"d-none"}`}>
    
    {/* 投票區域開始 */}
    <div>
        <div>
        <h2 className="text-center pt-3">我也要投票!家庭</h2>
        <div className="titleLineBox">
            <img alt="" className="titleLine mb-3" src="img/index/line.png" />
        </div>
        </div>
        <div>
            <form action="" className="fs-2 p-2 justify-content-left align-items-center mb-3">

            {familyVote.map((v,i) => {
                return(
                <VoteLabel 
                  name={v.game_name} />
                )                    
            })}
            
            
            <input type="submit" value="送  出" className="submitVote m-3" />
            </form>
        </div>
     </div>
</div>

   {/* 卡牌系列開始 */}

{/* 投票長條圖及結果開始 */}
<div className={`voteResult pt-3 ${ status === 3 ? "d-block" : "d-none"}` }>
        <h2 className="text-center">目前投票結果卡牌</h2>
        <div className="titleLineBox">
            <img alt="" className="titleLine" src="img/index/line.png" />
        </div>
        
        <Container >

        {/* 長條圖在這 */}
        
        <BarChart/>

        <Row className="d-flex justify-content-center ps-5 ms-4 pt-5">
            <Col md={4} >
                <div className="votePic mt-5">
                <img alt="遊戲圖片" className="voteImg" src='/img/contest/vote/family06_incanGold.jpg' fluid />
                </div>                     
            </Col>
            <Col md={4}>
                <div className="votePic">
                <img alt="遊戲圖片" className="voteImg" src='/img/contest/vote/family08_avalon.jpg' fluid />
                </div>
                     
            </Col>
            <Col md={4}>
                <div className="votePic mt-5">
                <img alt="遊戲圖片" className="voteImg" src='/img/contest/vote/family05_geisters.jpg' fluid />
                </div>
                    
            </Col>
            <Col md={4} ><div className="voteRank mt-5 ms-3">第三名</div> </Col>
            <Col md={4}><div className="voteRank ms-3">第一名</div> </Col>
            <Col md={4}><div className="voteRank mt-5 ms-3">第二名</div></Col>
        </Row>
        </Container>
        
        </div>
         {/* 投票長條圖及結果結束 */}

         <div className={`voteChoose ${status===3 ? "d-block":"d-none"}`}>
    
    {/* 投票區域開始 */}
    <div>
        <div>
        <h2 className="text-center pt-3">我也要投票!卡牌</h2>
        <div className="titleLineBox">
            <img alt="" className="titleLine mb-3" src="img/index/line.png" />
        </div>
        </div>
        <div>
            <form action="" className="fs-2 p-2 justify-content-left align-items-center mb-3">

            {cardVote.map((v,i) => {
                return(
                <VoteLabel 
                  name={v.game_name} />
                )                    
            })}
            
            
            <input type="submit" value="送  出" className="submitVote m-3" />
            </form>
        </div>
     </div>
</div>


   {/* 策略系列開始 */}

{/* 投票長條圖及結果開始 */}
<div className={`voteResult pt-3 ${status === 4 ? "d-block":"d-none"}`}>
        <h2 className="text-center">目前投票結果策略</h2>
        <div className="titleLineBox">
            <img alt="" className="titleLine" src="img/index/line.png" />
        </div>
        
        <Container >

        {/* 長條圖在這 */}
        
        <BarChart/>

        <Row className="d-flex justify-content-center ps-5 ms-4 pt-5">
            <Col md={4} >
                <div className="votePic mt-5">
                <img alt="遊戲圖片" className="voteImg" src='/img/contest/vote/family06_incanGold.jpg' fluid />
                </div>                     
            </Col>
            <Col md={4}>
                <div className="votePic">
                <img alt="遊戲圖片" className="voteImg" src='/img/contest/vote/family08_avalon.jpg' fluid />
                </div>
                     
            </Col>
            <Col md={4}>
                <div className="votePic mt-5">
                <img alt="遊戲圖片" className="voteImg" src='/img/contest/vote/family05_geisters.jpg' fluid />
                </div>
                    
            </Col>
            <Col md={4} ><div className="voteRank mt-5 ms-3">第三名</div> </Col>
            <Col md={4}><div className="voteRank ms-3">第一名</div> </Col>
            <Col md={4}><div className="voteRank mt-5 ms-3">第二名</div></Col>
        </Row>
        </Container>
        
        </div>
         {/* 投票長條圖及結果結束 */}

         <div className={`voteChoose ${status===4?"d-block":"d-none"}`}>
    
    {/* 投票區域開始 */}
    <div>
        <div>
        <h2 className="text-center pt-3">我也要投票!策略</h2>
        <div className="titleLineBox">
            <img alt="" className="titleLine mb-3" src="img/index/line.png" />
        </div>
        </div>
        <div>
            <form action="" className="fs-2 p-2 justify-content-left align-items-center mb-3">

            {tragVote.map((v,i) => {
                return(
                <VoteLabel 
                  name={v.game_name} />
                )                    
            })}
            
            
            <input type="submit" value="送  出" className="submitVote m-3" />
            </form>
        </div>
     </div>
</div>
        
        </div>
          
       
        </>
    )
}


export default Vote


