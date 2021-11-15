import React from 'react';
import PropTypes from 'prop-types';
import {Bar} from 'react-chartjs-2';

const allVote=[
    {
     id:1,
     game_name:"傳情畫意家庭",
     vote_get:2,
     product_type:1,
    },
    {
        id:1,
        game_name:"傳情畫意家庭2",
        vote_get:2,
        product_type:1,
       },
    {
     id:2,
     game_name:"估估劃劃卡牌",
     vote_get:3,
     product_type:2,
    },
    {
     id:3,
     game_name:"諾亞方舟策略",
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

