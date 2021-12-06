import {React,useState,useEffect} from 'react'
// import reactDom from 'react-dom';
// import PropTypes from 'prop-types'
import "../../css/vote.css";
import "normalize.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Container, Row,Col,Form,Button} from 'react-bootstrap';
import BarChart from '../../components/contest/BarChart';
import VoteLabel from '../../components/contest/VoteLabel.js'
import {withRouter} from "react-router-dom"
import axios from "axios";
import { API_URL } from '../../configs/config';
import Swal from 'sweetalert2'
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





function Vote(props) {
    const[status,setStatus] = useState(2);
    // 寫一個跑資料的迴圈去承接到barchart
    const[barno,setBarno] = useState(barchartRun(barchartRun))

    // 承接投票更新的鉤子
    const[count,setCount]=useState(0)
    const[update,setUpdate]=useState({
        product_name:"",
        product_vote:0,
    })


    // 投票用送出函式
    async function handleSubmit(e) {

        // Sweetalert

        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'btn btn-success',
              cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
          })
          
          Swal.fire({
            icon: 'success',
            title: '投票成功!',
            showConfirmButton: false,
            timer: 1500
          })

        e.preventDefault();
        try{
            let res = await axios.post(`${API_URL}/vote/addVoted`,
            voted,{withCredentials:true},
            window.location.reload()
        );
        } catch(e) {
            console.log("handleSubmit",e)
            }  
        }

        // console.log("確認是否傳回父層");
        // console.log(count) 
        useEffect(async () =>{
        let res = await axios.get(`${API_URL}/vote/list`);
        setBarno(res.data);
        
        // 可以叫出label值
      },[])
      //console.log(barno) 

    // 全系列labels
      const textArr=[];
      const labelData = ()=>{
        for(let i=0; i<barno.length;i++){
            textArr.push(barno[i].product_name)
        }
        return textArr
    }
    labelData();

    // 全系列投票
    const voteArr=[]
    const voteData = ()=>{
        for(let i=0; i<barno.length;i++){
            voteArr.push(barno[i].product_vote)
        }
        return voteArr
    }  
    voteData();
    
    // 家庭系列labels

    const textFami=[];
    const famiData = ()=>{
        for(let i=0; i<barno.length;i++){
            if (barno[i].product_type==="家庭")
            textFami.push(barno[i].product_name)
        }
        return textFami
    }
    famiData();
    
    // 家庭系列投票
    const voteFami=[]
    const voFami=()=>{
        for(let i=0; i<barno.length;i++){
            if (barno[i].product_type==="家庭")
            voteFami.push(barno[i].product_vote)
        }
        return voteFami 
    }
    voFami();

    // 卡牌系列labels

    const textCard=[];
    const cardData = ()=>{
        for(let i=0; i<barno.length;i++){
            if (barno[i].product_type==="卡牌")
            textCard.push(barno[i].product_name)
        }
        return textCard
    }
    cardData();
    
    // 卡牌系列投票
    const voteCard=[]
    const voCard=()=>{
        for(let i=0; i<barno.length;i++){
            if (barno[i].product_type==="卡牌")
            voteCard.push(barno[i].product_vote)
        }
        return voteCard 
    }
    voCard();

    // 策略系列labels

    const textTrag=[];
    const tragData = ()=>{
        for(let i=0; i<barno.length;i++){
            if (barno[i].product_type==="策略")
            textTrag.push(barno[i].product_name)
        }
        return textTrag
    }
    tragData();
        
    // 策略系列投票
    const voteTrag=[]
    const voTrag=()=>{
        for(let i=0; i<barno.length;i++){
            if (barno[i].product_type==="策略")
            voteTrag.push(barno[i].product_vote)
        }
         return voteTrag 
     }
    voTrag();

    // 投票的函式
    const voteAdd=(i)=>{
        let newVote=i.product_vote;
        newVote+=1;
        console.log(newVote)
        return(
            Number(newVote)
        )
    }
  
    // 投票的鉤子
    const [voted,setVoted] =useState(
        {
            product_name:"",
            product_vote:0,
        }
    );

  

    // 鎖定標籤的鉤子
    const[votename,setVotename] = useState("");
     // 寫一個存放投票陣列的鉤子 

      let originVote = 0;
      // 
      const searchName=(b)=>{
        for(let i = 0; i < b.length; i++) {
            if(barno[i].product_name === votename){
                return(
                    barno[i].product_vote
                )
            }
            // originVote =barno[i].product_vote
        }
    }
    
    let newvoted = {...voted}
      useEffect(()=>{      
        newvoted.product_name = votename;
        searchName(barno);
        newvoted.product_vote= searchName(barno) + 1;
        setVoted(newvoted)
        },[votename])
 

    // 檢查父元素標籤的值
    // console.log("父元素內的值",count)
    // console.log(votename)
    

    // [全系列]複製一個陣列，對陣列的票數進行排名
        
    const newrank=[...barno];
    newrank.sort(function(a, b) {
        var nameA = a.product_vote; // ignore upper and lowercase
        var nameB = b.product_vote; // ignore upper and lowercase
        if (nameA < nameB) {
          return 1;
        }
        if (nameA > nameB) {
          return -1;
        }
        // names must be equal
        return 0;
      });

    // 家庭系列排名
    const famiRank=[]
    const famiIn=()=>{
        for(let i=0; i<barno.length;i++){
            if (barno[i].product_type==="家庭")
            famiRank.push(barno[i])
        }
         return famiRank
     }
    famiIn();
    // 將家庭陣列中的vote排大小
    famiRank.sort(function(a, b) {
        var nameA = a.product_vote; // ignore upper and lowercase
        var nameB = b.product_vote; // ignore upper and lowercase
        if (nameA < nameB) {
          return 1;
        }
        if (nameA > nameB) {
          return -1;
        }
        // names must be equal
        return 0;
      });
    // console.log(famiRank)
       
    // 卡牌系列排名
    const cardRank=[]
    const cardIn=()=>{
        for(let i=0; i<barno.length;i++){
            if (barno[i].product_type==="卡牌")
            cardRank.push(barno[i])
        }
         return cardRank
     }
    cardIn();
    // 將家庭陣列中的vote排大小
    cardRank.sort(function(a, b) {
        var nameA = a.product_vote; // ignore upper and lowercase
        var nameB = b.product_vote; // ignore upper and lowercase
        if (nameA < nameB) {
          return 1;
        }
        if (nameA > nameB) {
          return -1;
        }
        // names must be equal
        return 0;
      });
    // console.log(cardRank)
    
   // 策略系列排名
   const tragRank=[]
   const tragIn=()=>{
       for(let i=0; i<barno.length;i++){
           if (barno[i].product_type==="策略")
           tragRank.push(barno[i])
       }
        return tragRank
    }
   tragIn();
   // 將家庭陣列中的vote排大小
   tragRank.sort(function(a, b) {
       var nameA = a.product_vote; // ignore upper and lowercase
       var nameB = b.product_vote; // ignore upper and lowercase
       if (nameA < nameB) {
         return 1;
       }
       if (nameA > nameB) {
         return -1;
       }
       // names must be equal
       return 0;
     });
   console.log(tragRank)


    // 網頁內容開始
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
                vote={voteArr}
                // gamename={barno.product_name}
            />
        }
        

        <Row className="d-flex justify-content-center ps-5 ms-4 pt-5">
        {/* 圖片路徑有做判斷 */}
            <Col md={4} >
                <div className="votePic mt-5">
                <img alt="遊戲圖片" className="voteImg" src={`../product_img/550x400/${newrank.length>0 ? newrank[2].product_img : ""}`} fluid />
                </div>                     
            </Col>
            <Col md={4}>
                <div className="votePic">
                <img alt="遊戲圖片" className="voteImg" src={`../product_img/550x400/${newrank.length>0 ? newrank[0].product_img : ""}`} fluid />
                </div>
                     
            </Col>
            <Col md={4}>
                <div className="votePic mt-5">
                <img alt="遊戲圖片" className="voteImg" src={`../product_img/550x400/${newrank.length>0 ? newrank[1].product_img : ""}`} fluid />
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
    <div>
        <div>
        <h2 className="text-center pt-3">我也要投票!</h2>
        <div className="titleLineBox">
            <img alt="" className="titleLine mb-3" src="img/index/line.png" />
        </div>
        </div>
        <div>
            <form action="" className="fs-2 p-2 justify-content-left align-items-center mb-3" onSubmit={handleSubmit}>

            {
                barno.map((v,i) => {
                return(
                <VoteLabel 
                  name={v.product_name}
                  vote={v.product_vote}
                  votename={votename}
                  setVotename={setVotename}  
                  />
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
                gamename={textFami}
                vote={voteFami}
            />
        }
        

        <Row className="d-flex justify-content-center ps-5 ms-4 pt-5">
            <Col md={4} >
                <div className="votePic mt-5">
                <img alt="遊戲圖片" className="voteImg" src={`../product_img/550x400/${famiRank.length>0 ? famiRank[2].product_img : ""}`}  fluid />
                </div>                     
            </Col>
            <Col md={4}>
                <div className="votePic">
                <img alt="遊戲圖片" className="voteImg" src={`../product_img/550x400/${famiRank.length>0 ? famiRank[0].product_img : ""}`} fluid />
                </div>
                     
            </Col>
            <Col md={4}>
                <div className="votePic mt-5">
                <img alt="遊戲圖片" className="voteImg" src={`../product_img/550x400/${famiRank.length>0 ? famiRank[1].product_img : ""}`} fluid />
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
            <form action="" className="fs-2 p-2 justify-content-left align-items-center mb-3" onSubmit={handleSubmit}>
            
            {
                
                barno.map((v,i) => {
                    if(v.product_type === "家庭"){
                        return (
                            <VoteLabel 
                            name={v.product_name}
                            vote={v.product_vote}
                            votename={votename}
                            setVotename={setVotename}  
                            />
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
        
        <BarChart
            className="chartContainer"
            gamename={textCard}
            vote={voteCard}
        />

        <Row className="d-flex justify-content-center ps-5 ms-4 pt-5">
            <Col md={4} >
                <div className="votePic mt-5">
                <img alt="遊戲圖片" className="voteImg" src={`../product_img/550x400/${cardRank.length>0 ? cardRank[2].product_img : ""}`} fluid />
                </div>                     
            </Col>
            <Col md={4}>
                <div className="votePic">
                <img alt="遊戲圖片" className="voteImg" src={`../product_img/550x400/${cardRank.length>0 ? cardRank[0].product_img : ""}`} fluid />
                </div>
                     
            </Col>
            <Col md={4}>
                <div className="votePic mt-5">
                <img alt="遊戲圖片" className="voteImg" src={`../product_img/550x400/${cardRank.length>0 ? cardRank[1].product_img : ""}`}s fluid />
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
            <form action="" className="fs-2 p-2 justify-content-left align-items-center mb-3" onSubmit={handleSubmit}>
           
            {
                
                barno.map((v,i) => {
                    if(v.product_type === "卡牌"){
                        return (
                            <VoteLabel 
                                name={v.product_name} 
                                vote={v.product_vote}
                                votename={votename}
                                setVotename={setVotename}
                            />
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
        
        <BarChart
            className="chartContainer"
            gamename={textTrag}
            vote={voteTrag}
        />

        <Row className="d-flex justify-content-center ps-5 ms-4 pt-5">
            <Col md={4} >
                <div className="votePic mt-5">
                <img alt="遊戲圖片" className="voteImg" src={`../product_img/550x400/${tragRank.length>0 ? tragRank[2].product_img : ""}`} fluid />
                </div>                     
            </Col>
            <Col md={4}>
                <div className="votePic">
                <img alt="遊戲圖片" className="voteImg" src={`../product_img/550x400/${tragRank.length>0 ? tragRank[0].product_img : ""}`} fluid />
                </div>
                     
            </Col>
            <Col md={4}>
                <div className="votePic mt-5">
                <img alt="遊戲圖片" className="voteImg" src={`../product_img/550x400/${tragRank.length>0 ? tragRank[1].product_img : ""}`} fluid />
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
            <form method="post" className="fs-2 p-2 justify-content-left align-items-center mb-3" onSubmit={handleSubmit}>
            
            {
                
                barno.map((v,i) => {
                    if(v.product_type === "策略"){
                        return (
                            <VoteLabel 
                                name={v.product_name} 
                                vote={v.product_vote}
                                votename={votename}
                                setVotename={setVotename}
                            />
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


