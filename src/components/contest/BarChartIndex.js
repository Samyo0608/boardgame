import {React} from 'react';
import {Bar} from 'react-chartjs-2';


const BarChartIndex = (props) => {
    const{name,vote}=props;
  
    
    return <div className="col-md" style={{height:350}}>
    
        <Bar 
            data={{
                labels: name,
                datasets:[
                    {label:'# of votes',
                     data:vote ,

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


export default BarChartIndex

