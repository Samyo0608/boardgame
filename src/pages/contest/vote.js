import {React,useState,useEffect} from 'react'
import reactDom from 'react-dom';
import PropTypes from 'prop-types'
import "../../css/vote.css";
import "normalize.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Container, Row,Col,} from 'react-bootstrap';
import BarChart from '../../components/contest/BarChart';
import VoteLabel from '../../components/contest/VoteLabel.js'
import {withRouter} from "react-router-dom"
import axios from "axios";
import { API_URL } from '../../configs/config';
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


// 假資料帶入vote


// const allVote=[
//     {
//      id:1,
//      game_name:"傳情畫意家庭",
//      vote_get:2,
//      product_type:1,
//     },
//     {
//         id:1,
//         game_name:"傳情畫意家庭2",
//         vote_get:2,
//         product_type:1,
//        },
//     {
//      id:2,
//      game_name:"估估劃劃卡牌",
//      vote_get:3,
//      product_type:2,
//     },
//     {
//      id:3,
//      game_name:"諾亞方舟策略",
//      vote_get:8,
//      product_type:3,
//     },
// ]

// 跑一個迴圈將物件放入陣列
const barchartRun = (b)=>{
    const bar =[]
    for(let i = 0; b< b.length; i++) {
        bar[i].push({...b[i]})
    }
    return bar
}

// 迴圈 bar vote標籤
const voteBarNo=(b)=>{
    // let label=[,]
    for(let i = 0; b < b.length; i++) {
        b.product_name.push()
        // console.log(b[0].product_name)
    }
    return (b)
}

// 迴圈 bar vote票數
const voteBarGet=(b)=>{
    let get=[]
    for(let i = 0 ; b < b.length; i++){
        get=b[i].product_vote.push()
    }
    return get
}

function Vote(props) {
    const[status,setStatus] = useState(2);
    // 寫一個跑資料的迴圈去承接到barchart
    const[barno,setBarno] = useState(barchartRun(barchartRun))
    // 承接Label陣列的鉤子
    const[labelName,setLabelName] = useState();


    useEffect(async () =>{
        let res = await axios.get(`${API_URL}/vote/list`);
        setBarno(res.data);
        
        // 可以叫出lable值
      },[])
      console.log(barno) 
      // 全系列labels
      const textArr=[];
      const labelData = ()=>{
        for(let i=0; i<barno.length;i++){
            textArr.push(barno[i].product_name)
        }
        return textArr
    }

    labelData();
    console.log(textArr)

    // 全系列投票
    const voteArr=[]
    const voteData = ()=>{
        for(let i=0; i<barno.length;i++){
            voteArr.push(barno[i].product_vote)
        }
        return voteArr
    }
    
    voteData();
    console.log(voteData)
    
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
<div className={`voteResult pt-3 ${status===1?"d-block":"d-none"}`}>
        <h2 className="text-center">目前投票結果</h2>
        <div className="titleLineBox">
            <img alt="" className="titleLine" src="img/index/line.png" />
        </div>
        
        <Container >

        {/* 長條圖在這 */}
        {
            <BarChart
                className="chartContainer"
                gamename={textArr}
                vote={voteData}
                // gamename={barno.product_name}
            />
        }
        

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
        <h2 className="text-center pt-3">我也要投票!</h2>
        <div className="titleLineBox">
            <img alt="" className="titleLine mb-3" src="img/index/line.png" />
        </div>
        </div>
        <div>
            <form action="" className="fs-2 p-2 justify-content-left align-items-center mb-3">

            {
                barno.map((v,i) => {
                return(
                <VoteLabel 
                  name={v.product_name} />
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
        <h2 className="text-center">目前投票結果</h2>
        <div className="titleLineBox">
            <img alt="" className="titleLine" src="img/index/line.png" />
        </div>
        
        <Container >

        {/* 長條圖在這 */}
        {
            <BarChart
                className="chartContainer"
                type={barno.product_type==="家庭"}
                vote={barno.vote_get}
                gamename={barno.game_name}
            />
        }
        

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
        <h2 className="text-center pt-3">我也要投票!</h2>
        <div className="titleLineBox">
            <img alt="" className="titleLine mb-3" src="img/index/line.png" />
        </div>
        </div>
        <div>
            <form action="" className="fs-2 p-2 justify-content-left align-items-center mb-3">
            
            {
                
                barno.map((v,i) => {
                    if(v.product_type === "家庭"){
                        return (
                            <VoteLabel name={v.product_name} />
                        )
                    }                   
            })}
            
            
            <input type="submit" value="送  出" className="submitVote m-3" />
            </form>
        </div>
     </div>
</div>

   {/* 卡牌系列開始 */}

{/* 投票長條圖及結果開始 */}
<div className={`voteResult pt-3 ${ status === 3 ? "d-block" : "d-none"}` }>
        <h2 className="text-center">目前投票結果</h2>
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
        <h2 className="text-center pt-3">我也要投票!</h2>
        <div className="titleLineBox">
            <img alt="" className="titleLine mb-3" src="img/index/line.png" />
        </div>
        </div>
        <div>
            <form action="" className="fs-2 p-2 justify-content-left align-items-center mb-3">
           
            {
                
                barno.map((v,i) => {
                    if(v.product_type === "卡牌"){
                        return (
                            <VoteLabel name={v.product_name} />
                        )
                    }                   
            })}
            
            
            <input type="submit" value="送  出" className="submitVote m-3" />
            </form>
        </div>
     </div>
</div>


   {/* 策略系列開始 */}

{/* 投票長條圖及結果開始 */}
<div className={`voteResult pt-3 ${status === 4 ? "d-block":"d-none"}`}>
        <h2 className="text-center">目前投票結果</h2>
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
        <h2 className="text-center pt-3">我也要投票!</h2>
        <div className="titleLineBox">
            <img alt="" className="titleLine mb-3" src="img/index/line.png" />
        </div>
        </div>
        <div>
            <form action="" className="fs-2 p-2 justify-content-left align-items-center mb-3">
            
            {
                
                barno.map((v,i) => {
                    if(v.product_type === "策略"){
                        return (
                            <VoteLabel name={v.product_name} />
                        )
                    }                   
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


