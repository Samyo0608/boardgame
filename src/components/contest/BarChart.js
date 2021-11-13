import React from 'react';
import PropTypes from 'prop-types';
import {Bar} from 'react-chartjs-2';

const BarChart = () => {

    return <div>
        <Bar 
            data={{
                labels: ['傳情畫意','估估劃劃','諾亞方舟','籤籤入扣','閃靈快手','印加寶藏','Bang!','阿瓦隆','狼人殺'],
                datasets:[
                    {label:'# of votes',
                     data: [5, 4, 3, 5, 14, 13,8,15,4],

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

