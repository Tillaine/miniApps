import React from 'react'
import {HorizontalBar} from 'react-chartjs-2';


class Chart extends React.Component {
    constructor (props) {
        super(props)
        this.state= {
            data: this.props.data
        }
    }

  render() {

    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'My First dataset',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: this.state.data
          }
        ]
      };
    
    return (
      <div>
        <h2>Horizontal Bar Example</h2>
        <HorizontalBar data={data} />
      </div>
    );
  }
};

export default Chart