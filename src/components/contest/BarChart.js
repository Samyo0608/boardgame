import React from 'react';
import PropTypes from 'prop-types';
import {Bar} from 'react-chartjs-2';

const allVote=[
    {
     id:1,
     game_name:"搶錢計畫",
     vote_get:8,
     product_type:1,
    },
    {
     id:2,
     game_name:"卡坦島",
     vote_get:3,
     product_type:2,
    },
    {
     id:3,
     game_name:"寶石鎮",
     vote_get:8,
     product_type:3,
    },
    {
        id:4,
        game_name:"卡卡頌",
        vote_get:6,
        product_type:3,
    },
    {
        id:5,
        game_name:"鐵道任務",
        vote_get:4,
        product_type:3,
    },
    {
        id:6,
        game_name:"烏邦果",
        vote_get:7,
        product_type:3,
    },
    {
        id:7,
        game_name:"史萊姆競速",
        vote_get:1,
        product_type:3,
    },
    {
        id:8,
        game_name:"消失的主角",
        vote_get:8,
        product_type:3,
    },
    {
        id:9,
        game_name:"拉密",
        vote_get:8,
        product_type:3,
    },
  
    
]

let bars=[]
let datainfos=[]

allVote.forEach(element => {
    bars.push(element.game_name)
    datainfos.push(element.vote_get)
    
});


// foreach

const BarChart = () => {

    return <div>
    
        <Bar 
            data={{
                labels: bars,
                datasets:[
                    {label:'# of votes',
                     data:datainfos ,

                     backgroundColor: [
                        'rgba(246, 134, 119, 0.8)',
                        'rgba(255, 228, 240, 0.8)',
                        'rgba(250, 181, 135, 0.8)',
                        'rgba(255, 243, 179, 0.8)',
                        'rgba(197, 236, 241, 0.8)',
                     ],
                    }            
                ],
                }}
            height={400}
            width={600}
            options={{
                maintainAspectRatio:false,
            }}
        />
    </div>
}


export default BarChart

