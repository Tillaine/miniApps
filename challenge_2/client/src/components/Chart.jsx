import React from 'react'
import { Line } from 'react-chartjs-2';


const options= {
    legend: false,
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        xAxes: [{
            display: true,
            gridLines: {
                display:true
            }
        }],
        yAxes: [{
            gridLines: {
                display:true
            }   
        }]
    }
  }


class Chart extends React.Component {
    constructor (props) {
        super(props)
        this.state= {
        }
    }


    componentDidMount() {
        
      }

  render() {
      console.log(this.state)
    const data = {
    
        labels: this.props.dates,
        datasets: [
            {
                label: 'Average Monthly Price in $',
                type: 'line',
                backgroundColor: 'rgba(18, 132, 136, 1)',
                borderColor: 'rgba(18, 132, 136, 1)',
                borderWidth: 1,
                maxBarThickness: 8,
                hoverBackgroundColor: 'rgba(18, 132, 136,0.4)',
                hoverBorderColor: 'rgba(18, 132, 136 ,1)',
                data: this.props.values
            }
        ]
       
    }
    return (
      <div>
        <h2>Price of Bitcoin over time in USD</h2>
        <Line data={data} options={options}/>
      </div>
    );
  }
};




export default Chart


  
 